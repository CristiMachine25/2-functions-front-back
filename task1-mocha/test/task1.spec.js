const { removeNthFromEnd} = require('../src/task1')
const expect = require('chai').expect

// BDD
describe('Suite 1', () => {
    it('removeNthFromEnd([1,2,3,4,5], 2) should return [1,2,3,5], 2', () => {
        expect(removeNthFromEnd([1,2,3,4,5], 2)).to.be.equal([1,2,3,5], 2);
    })
})


//TDD
const {suite, test} = require('mocha')

suite('Suite 2', () => {
    test('removeNthFromEnd([1,2,3,4], 2) should return [1,2,4], 2', () => {
        expect(removeNthFromEnd([1,2,3,4], 2)).to.be.equal([1,2,4], 2);
    })
})


