import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api') // Fetch data from the backend
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>React + Electron + Node</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
