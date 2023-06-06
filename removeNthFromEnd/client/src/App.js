import React, { useState } from 'react';
import './App.css';

function App() {
  const [head, setHead] = useState([]);
  const [n, setN] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/removeNthFromEnd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ head, n }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Head:
          <input type="text" value={head} onChange={(event) => setHead(event.target.value.split(',').map(Number))} />
        </label>
        <br />
        <label>
          N:
          <input type="number" value={n} onChange={(event) => setN(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {result !== null && (
        <div>
          Result:
          {result.length === 0 ? (
            <span style = {{color: 'red', backgroundColor: 'black', fontSize: 100}}>NULL</span>
          ) : (
            <ul>
              {result.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;