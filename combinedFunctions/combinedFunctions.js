// removeNthFromEnd function and its dependencies

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

//maxArea function

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0 ;
    let l = 0, r = height.length - 1;
    while(l < r){
        area = (r-l) * Math.min(height[r], height[l]);
        maxArea = Math.max(maxArea, area);
        if(height[r] > height[l])
            l++;
        else
            r--;
    }
    return maxArea;
};

module.exports = { removeNthFromEnd, ListNode, maxArea };