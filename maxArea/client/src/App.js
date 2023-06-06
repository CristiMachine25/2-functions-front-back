import React, { useState } from 'react';
import './App.css';

function App() {
  const [heights, setHeights] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const heightArray = heights.split(',').map(Number);
    const response = await fetch('/api/maxArea', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height: heightArray }),
    });
    const data = await response.json();
    setResult(data.maxArea);
  };

  return (
    <div className="App">
      <h1 className="title">Max Area Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="heights">Heights :</label>
        <input
          type="text"
          id="heights"
          value={heights}
          onChange={(e) => setHeights(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <p>Max Area: {result}</p>}
    </div>
  );
}

export default App;