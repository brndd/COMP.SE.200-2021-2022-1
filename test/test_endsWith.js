import { expect } from 'chai';
import endsWith from '../src/endsWith.js';

describe('endsWith()', function() {
    // Example tests
    it("should return true with params 'abc','c'", function() {
        expect(endsWith('abc','c')).to.be.true;
    });
    it("should return false with params 'abc','b'", function() {
        expect(endsWith('abc','b')).to.be.false;
    });
    it("should return true with params 'abc','b', 2", function() {
        expect(endsWith('abc','b',2)).to.be.true;
    });
    it("should return true with params 'abc','b', 3", function() {
        expect(endsWith('abc','c',3)).to.be.true;
    });

    //Empty string
    it("should return false with params '','b'", function() {
        expect(endsWith('','b')).to.be.false;
    });

    //Empty target
    //This is somewhat undefined behaviour
    it("should return true with params 'abc',''", function() {
        expect(endsWith('abc', '')).to.be.true;
    });
    it("should return true with params 'abc','',1", function() {
        expect(endsWith('abc', '', 1)).to.be.true;
    });
    //Negative index
    it("should return false with params 'abc','',-1", function() {
        expect(endsWith('abc', 'c', -1)).to.be.false;
    });
    // Bigger index
    it("should return true with params 'abc','abc'", function() {
        expect(endsWith('abc', 'abc')).to.be.true;
    });
    it("should return true with params 'abc','bc'", function() {
        expect(endsWith('abc', 'bc')).to.be.true;
    });
    it("should return false with params 'abc','abcdef'", function() {
        expect(endsWith('abc', 'abcdef')).to.be.false;
    });

    //Position above length
    it("should clamp length if it is too high", function() {
        expect(endsWith('abc','c', 5)).to.be.true;
    });
});
