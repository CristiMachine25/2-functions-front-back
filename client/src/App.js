import React, { useState } from 'react';
import './App.css';

function App() {
  const [head, setHead] = useState([]);
  const [n, setN] = useState(0);
  const [heights, setHeights] = useState('');
  const [resultRemoveNth, setResultRemoveNth] = useState(null);
  const [resultMaxArea, setResultMaxArea] = useState(null);

  const handleSubmitRemoveNth = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/removeNthFromEnd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ head, n }),
    });
    const data = await response.json();
    setResultRemoveNth(data);
  };

  const handleSubmitMaxArea = async (e) => {
    e.preventDefault();
    const heightArray = heights.split(',').map(Number);
    const response = await fetch('/api/maxArea', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height: heightArray }),
    });
    const data = await response.json();
    setResultMaxArea(data.maxArea);
  };

  return (
    <div>
      {/* Remove Nth From End */}
      <form onSubmit={handleSubmitRemoveNth}>
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
      {resultRemoveNth !== null && (
        <div>
          Result:
          {resultRemoveNth.length === 0 ? (
            <span style={{ color: 'red', backgroundColor: 'black', fontSize: 100 }}>NULL</span>
          ) : (
            <ul>
              {resultRemoveNth.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Max Area Calculator */}
      <h1 className="title">Max Area Calculator</h1>
      <form onSubmit={handleSubmitMaxArea}>
        <label htmlFor="heights">Heights :</label>
        <input
          type="text"
          id="heights"
          value={heights}
          onChange={(e) => setHeights(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      {resultMaxArea !== null && <p>Max Area: {resultMaxArea}</p>}
    </div>
  );
}

export default App;
