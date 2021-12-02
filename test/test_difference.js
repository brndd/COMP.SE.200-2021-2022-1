import { expect } from 'chai';
import difference from '../src/difference.js';

describe('difference()', function() {
    //Test example case
    it("should return [1] when passed ([2, 1], [2, 3])", function() {
        expect(difference([2, 1], [2, 3])).to.eql([1]);
    });

    //Test multiple exclusion arrays
    it("should return [1] when passed ([2, 1], [2, 3], [4,5])", function () {
        expect(difference([2, 1], [2, 3], [4, 5])).to .eql([1]);
    });

    //Test undefined behaviour as the function currently implements it
    it("should return an empty array when passed input that is not an array", function() {
        expect(difference(9, 9, 9)).to.be.empty;
        expect(difference(5)).to.be.empty;
    });
    it("should return [] when passed string parameters ('abcde', 'bcde')", function() {
        expect(difference('abcde', 'bcde')).to.be.empty;
    });
});