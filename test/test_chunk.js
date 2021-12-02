import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('chunk()', function() {
    //Test example cases from comment
    it("should return [['a', 'b'], ['c', 'd']] when passed (['a', 'b', 'c', 'd'], 2)", function() {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });
    it("should return [['a', 'b', 'c'], ['d']] when passed (['a', 'b', 'c', 'd'], 3)", function() {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
    });

    //Test null case
    it("should return [] when passed null", function() {
        expect(chunk(null, 1)).to.be.empty;
    });

    //Test zero length
    it("should return [] when passed ([1, 2], 0)", function() {
        expect(chunk([1, 2], 0)).to.be.empty;
    });
});
