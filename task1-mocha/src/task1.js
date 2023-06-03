/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
  }
  
var removeNthFromEnd = function(head, n) {
    let fals = new ListNode(0);
    fals.next = head;
    let sageata = fals;
    let pozitie = fals;

    for(let i = 0; i < n ; i++)
        pozitie = pozitie.next;

    while(pozitie.next != null){
        sageata = sageata.next;
        pozitie = pozitie.next;
    }
    sageata.next = sageata.next.next;
    return fals.next;
};

module.exports = {removeNthFromEnd, ListNode};
