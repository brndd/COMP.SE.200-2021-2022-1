import { expect } from 'chai';
import defaultToAny from '../src/defaultToAny.js';

describe('defaultToAny()', function() {
    //Test example cases
    it("should return 1 when passed (1, 10, 20)", function() {
        expect(defaultToAny(1, 10, 20)).to.equal(1);
    });

    it("should return 10 when passed (undefined, 10, 20)", function() {
        expect(defaultToAny(undefined, 10, 20)).to.equal(10);
    });

    it("should return 20 when passed (undefined, null, 20)", function() {
        expect(defaultToAny(undefined, null, 20)).to.equal(20);
    });

    it("should return NaN when passed (undefined, null, NaN)", function() {
        expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
    });

    //Misc tests
    it("should return undefined when passed no parameters", function() {
        expect(defaultToAny()).to.be.undefined;
    });

    it("should return 5 when passed (5, null, undefined)", function() {
        expect(defaultToAny(5, null, undefined)).to.equal(5);
    });

    it("should return 5 when passed (null, 5, null)", function() {
        expect(defaultToAny(null, 5, null)).to.equal(5);
    });
});