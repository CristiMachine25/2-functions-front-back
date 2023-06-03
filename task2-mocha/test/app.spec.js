const {maxArea} = require('../src/app');
const expect = require('chai').expect

// BDD
describe('Suite 1', () => {
    it('maxArea([1,8,6,2,5,4,8,3,7]) should return 49', () =>{
        expect(maxArea([1,8,6,2,5,4,8,3,7])).to.equal(49);
    });
});

describe('Suite 2', () => {
    it('maxArea([1, 1]) should return 1', () =>{
        expect(maxArea([1,1])).eql(1);
    });
});