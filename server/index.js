import 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// Keep these two after every API route.
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 5050;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server listening on ${port}`);
});