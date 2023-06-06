const { removeNthFromEnd, ListNode } = require('../server/src');
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

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

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));