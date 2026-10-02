import { useEffect, useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('Checking the server...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.ok ? 'Server OK' : 'Server problem'))
      .catch(() => setStatus('Server not reachable'));
  }, []);

  return <p className="p-8 text-4xl font-bold">{status}</p>;
}