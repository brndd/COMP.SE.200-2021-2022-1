import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp()', function() {
    it('should return -5 when clamping -10 to -5..5', function() {
        expect(clamp(-10, -5, 5)).to.equal(-5);
    });
    it('should return 5 when clamping 10 to -5..5', function() {
       expect(clamp(10, -5, 5)).to.equal(5); 
    });
    it('should return NaN when clamping a string to -5..5', function() {
       expect(clamp("this is not a number", -5, 5)).to.be.NaN;
    });
});
