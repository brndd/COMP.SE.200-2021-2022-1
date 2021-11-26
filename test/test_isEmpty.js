import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty()', function() {
    it('should return true with the parameter null', function() {
        expect(isEmpty(null)).to.be.true;
    });
});
