import { useEffect, useState } from 'react';
import axios from 'axios';

interface Park {
  id: number;
  parkname: string;
}

export default function Termeles() {
  const [parks, setParks] = useState<Park[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    axios
      .get<Park[]>('http://10.1.1.196:4000/api/parks', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setParks(res.data))
      .catch((err) => {
        console.error(err);
        alert('Session expired, please log in again.');
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ color: 'black' }}>Loading…</p>;

  return (
    <div style={{ padding: '2rem', color: 'black' }}>
      <h1>My Parks</h1>
      {parks.length === 0 ? (
        <p>No parks found.</p>
      ) : (
        <ul>
          {parks.map((p) => (
            <li key={p.id}>{p.parkname}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
