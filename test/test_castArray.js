import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray()', function() {
    // Example tests
    it("should return [1] when the argument is 1", function() {
        expect(castArray(1)).to.deep.equal([1]);
    });
    it("should return [{ 'a': 1 }] when the argument is { 'a': 1 }", function() {
        expect(castArray({ 'a': 1 })).to.deep.equal([{ 'a': 1 }]);
    });
    it("should return ['abc'] when the argument is 'abc'", function() {
        expect(castArray('abc')).to.deep.equal(['abc']);
    });
    it("should return [null] when the argument is null", function() {
        expect(castArray(null)).to.deep.equal([null]);
    });
    it("should return [undefined] when the argument is undefined", function() {
        expect(castArray(undefined)).to.deep.equal([undefined]);
    });
    it("should return [] when the argument is empty", function() {
        expect(castArray()).to.deep.equal([]);
    });
    it("should return [1, 2, 3] when the argument is [1, 2, 3]", function() {
        expect(castArray([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });
    // New Array
    it("should return the same array when the argument is new Array('a', 'b', 'c', 'd')", function() {
        expect(castArray(new Array('a', 'b', 'c', 'd'))).to.deep.equal(['a', 'b', 'c', 'd']);
    });

    // Function array
    it("should return [Function] when the argument is Function", function() {
        function func(){
            return false;
        }
        expect(castArray(func)).to.deep.equal([func]);
    });

});
