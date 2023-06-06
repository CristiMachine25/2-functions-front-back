const {maxArea} = require('../server/src');

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/api/maxArea', (req, res) =>{
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = maxArea(height);
     res.json({ maxArea: result });
});

app.post('/api/maxArea', (req, res) => {
    const height = req.body.height;
    const result = maxArea(height);
    res.json({ maxArea: result });
  });

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)