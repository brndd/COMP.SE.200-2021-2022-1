import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter()', function() {
    // Default example tests
    const users = 
    [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];  
    it("should return object for barney from \n[{'user':'barney','active':true},\n{'user':'fred','active':false}]\n when filtered by active", function() {
        expect(filter(users, ({ active }) => active)).to.deep.equal([users[0]]);
    });
    it("should return object for fred from \n[{'user':'barney','active':true},\n{'user':'fred','active':false}]\n when filtered by not active", function() {
        expect(filter(users, ({ active }) => !active)).to.deep.equal([users[1]]);
    });
    // Empty
    it("should return an empty object on empty collection", function() {
        expect(filter([], ({ active }) => !active)).to.deep.equal([[]]);
    });
    //Null
    it("should return an empty object on null collection", function() {
        expect(filter(null, ({ active }) => !active)).to.deep.equal([[]]);
    });
    // Numerical comparison
    it("should return when counts [10,20,30,40] by value > 25", function(){
        const vec = [10,20,30,40];
        expect(filter(vec, val => val > 25)).to.deep.equal([30,40]);
    });
    // Type comparison 
    it("Should return all elements of one type", function(){
        const arr = [true, 12, "Hello!", "No", [14], function(){return false}, null];
        expect(filter(arr, val => typeof val == 'string')).to.deep.equal(["Hello!", "No"]);
    });
    // Custom object comparison
    it("Should return all elements of one type", function(){
        const arr = [];
        let obj;
        for (let i = 0; i < 10; i++) {
            obj = new Object();
            obj.number = i;
            arr[i] = obj;
        }
        expect(filter(arr, object => object.number % 2 === 0 )).to.deep.equal([{"number": 0},{"number": 2},{"number": 4},{"number": 6},{"number": 8},]);
    });
});
