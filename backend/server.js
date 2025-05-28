const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: '10.1.1.161',
  port: 5432,
  user: 'cpsupport', // change if different
  password: 'Alaska615', // put actual password
  database: 'test',
});

const auth = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token  = header.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({ message: 'Invalid / expired token' });
  }
};

const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/parks', auth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT parkname FROM parks WHERE uid = $1 ORDER BY id',
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
app.listen(4000, () => console.log('✅ Backend running at http://10.1.1.196:4000'));
