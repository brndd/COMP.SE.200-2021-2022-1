import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('camelCase()', function() {
    //Test example cases from comment
    it("should return 'fooBar' when passed 'Foo Bar'", function() {
        expect(camelCase('Foo Bar')).to.equal('fooBar');
    });
    it("should return 'fooBar' when passed '--foo-bar--'", function() {
        expect(camelCase('--foo-bar--')).to.equal('fooBar');
    });
    it("should return 'fooBar' when passed '__FOO_BAR__'", function() {
        expect(camelCase('__FOO_BAR__')).to.equal('fooBar');
    });

    //Test some undefined behaviour according to how the function currently would be doing it (if it wasn't buggy)
    it("should return 'null' when passed null", function() {
        expect(camelCase(null)).to.equal('null');
    });

    it("should return 'objectObject' when passed an object", function() {
        expect(camelCase(new Object())).to.equal('objectObject');
    });
});
