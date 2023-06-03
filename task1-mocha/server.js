const { removeNthFromEnd, ListNode } = require('./src/task1');
const express = require('express');
const app = express();
const PORT = 3000;

 app.use(express.json());

 app.post('/api/removeNthFromEnd', (req, res) => {
   const { head, n } = req.body;
   const linkedList = new ListNode(...head);
   const result = removeNthFromEnd(linkedList, n);

   res.json(result);
});


app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
