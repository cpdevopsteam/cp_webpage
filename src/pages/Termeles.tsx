import { useEffect, useState } from 'react';
import axios from 'axios';
import { InfluxDB } from '@influxdata/influxdb-client';
import { PiSolarPanelFill } from 'react-icons/pi';

interface Park {
  id: number;
  parkname: string;
}

interface Metrics {
  eDaily?: number;
  activePower?: number;
}

interface ParkWithMetrics extends Park {
  metrics?: Metrics;
}

export default function Termeles() {
  const [parks, setParks] = useState<ParkWithMetrics[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginToken = localStorage.getItem('token');
    if (!loginToken) {
      window.location.href = '/login';
      return;
    }

    const influxUrl   = import.meta.env.VITE_INFLUX_URL   as string;
    const influxOrg   = import.meta.env.VITE_INFLUX_ORG   as string;
    const influxToken = import.meta.env.VITE_INFLUX_TOKEN as string;
    if (!influxUrl || !influxOrg || !influxToken) {
      console.error('Missing InfluxDB environment variables');
      setLoading(false);
      return;
    }

    const influxDB = new InfluxDB({ url: influxUrl, token: influxToken });
    const queryApi = influxDB.getQueryApi(influxOrg);

    const start        = '-24h';
    const stop         = 'now()';
    const windowPeriod = '1h';

    const loadAll = async () => {
      try {
        const res = await axios.get<Park[]>(
          'http://10.1.1.196:4000/api/parks',
          { headers: { Authorization: `Bearer ${loginToken}` } }
        );
        const parkList = res.data;

        const withMetrics = await Promise.all(
          parkList.map(async (park) => {
            const fluxQuery = `
              from(bucket: "kif_control")
                |> range(start: ${start}, stop: ${stop})
                |> filter(fn: (r) => r["_measurement"] == "${park.parkname}")
                |> filter(fn: (r) => r["_field"] == "E_Daily" or r["_field"] == "Active_Power")
                |> aggregateWindow(every: ${windowPeriod}, fn: last, createEmpty: false)
                |> yield(name: "last")
            `;
            const rows = await queryApi.collectRows<{_field: string; _value: number}>(fluxQuery);

            const m: Metrics = {};
            rows.forEach(r => {
              if (r._field === 'E_Daily')          m.eDaily       = r._value;
              else if (r._field === 'Active_Power') m.activePower = r._value;
            });

            return { ...park, metrics: m };
          })
        );

        setParks(withMetrics);
      } catch (err) {
        console.error(err);
        alert('Session expired or error loading data. Please log in again.');
        localStorage.removeItem('token');
        window.location.href = '/login';
      } finally {
        setLoading(false);
      }
    };

    loadAll();
    const interval = setInterval(loadAll, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="w-12 h-12 border-4 border-dashed border-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-start pt-12 px-4 bg-gradient-to-r from-[#f58d48] to-[#3498d9]">
      <div className="w-full max-w-5xl mx-auto bg-[#23272b] rounded-lg shadow-md p-6 flex flex-col items-center">
        {/* Centered title */}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">My Parks</h1>

        {parks.length === 0 ? (
          <p className="text-white">No parks found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center pl-0">
            {parks.map(({ id, parkname, metrics }) => (
              <li
                key={id}
                className="flex flex-col items-center space-y-3 bg-[#343a40] border-[#343a40] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-white"
              >
                <PiSolarPanelFill size={32} className="text-white" />
                <h2 className="text-lg font-semibold text-white">{parkname}</h2>
                <div className="text-center space-y-1">
                  <p className="text-sm text-white">Daily Energy</p>
                  <p className="text-xl text-white">
                    {metrics?.eDaily != null ? (
                      metrics.eDaily > 1000
                        ? `${(metrics.eDaily / 1000).toFixed(2)} MW`
                        : `${metrics.eDaily.toFixed(2)} kW`
                    ) : '–'}
                  </p>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-sm text-white">Active Power</p>
                  <p className="text-xl text-white">
                    {metrics?.activePower != null
                      ? `${metrics.activePower.toFixed(2)} kW`
                      : '–'}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
