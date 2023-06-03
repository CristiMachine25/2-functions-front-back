const { removeNthFromEnd, ListNode} = require('../src/task1');
const expect = require('chai').expect;

// describe('Suite 1', () => {
//     it('removeNthFromEnd([1,2,3,4,5], 2) should return [1,2,3,5], 2', () => {
//         expect(removeNthFromEnd([1,2,3,4,5], 2)).to.be.equal([1,2,3,5], 2);
//     })
// })

describe('Suite 1', () => {
    it('removeNthFromEnd([1, 2, 3, 4, 5], 2) should return [1, 2, 3, 5]', () => {
      // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
      const head = new ListNode(1);
      head.next = new ListNode(2);
      head.next.next = new ListNode(3);
      head.next.next.next = new ListNode(4);
      head.next.next.next.next = new ListNode(5);
  
      // Call the removeNthFromEnd function
      const result = removeNthFromEnd(head, 2);
  
      // Check if the modified list is as expected: 1 -> 2 -> 3 -> 5
      expect(result.val).to.equal(1);
      expect(result.next.val).to.equal(2);
      expect(result.next.next.val).to.equal(3);
      expect(result.next.next.next.val).to.equal(5);
      expect(result.next.next.next.next).to.be.null;
    });
  });

  describe('removeNthFromEnd', () => {
    it('removeNthFromEnd([1], 1) should return []', () => {
      // Create a linked list: 1
      const head = new ListNode(1);
  
      // Call the removeNthFromEnd function
      const result = removeNthFromEnd(head, 1);
  
      // Check if the modified list is empty
      expect(result).to.be.null;
    });
  });
  
  describe('removeNthFromEnd', () => {
    it('removeNthFromEnd([1, 2], 1) should return [1]', () => {
      // Create a linked list: 1 -> 2
      const head = new ListNode(1);
      head.next = new ListNode(2);
  
      // Call the removeNthFromEnd function
      const result = removeNthFromEnd(head, 1);
  
      // Check if the modified list is as expected: 1
      expect(result.val).to.equal(1);
      expect(result.next).to.be.null;
    });
  });
  

