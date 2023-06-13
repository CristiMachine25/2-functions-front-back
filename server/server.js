const { removeNthFromEnd, ListNode, maxArea } = require('../server/src');
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

//removeNthFromEnd API
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let currentNode = head;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return head;
}

app.post('/api/removeNthFromEnd', (req, res) => {
  const { head, n } = req.body;
  const linkedList = arrayToLinkedList(head);
  const result = removeNthFromEnd(linkedList, n);

  // Convert the linked list back to an array before sending the response
  const resultArray = [];
  let currentNode = result;
  while (currentNode !== null) {
    resultArray.push(currentNode.val);
    currentNode = currentNode.next;
  }

  res.json(resultArray);
});

//maxArea API
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