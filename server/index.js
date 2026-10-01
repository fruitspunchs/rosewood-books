import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

const port = process.env.PORT || 5050;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server listening on ${port}`);
});