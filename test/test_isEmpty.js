import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty()', function() {
    //Miscellaneous tests
    it('should return true with the parameter null', function() {
        expect(isEmpty(null)).to.be.true;
    });
    it('should return true with a boolean parameter', function() {
        expect(isEmpty(true)).to.be.true;
        expect(isEmpty(false)).to.be.true;
    });
    it('should return true with an integer parameter', function() {
        expect(isEmpty(1)).to.be.true;
    });
    it('should return true with an empty array parameter', function() {
        expect(isEmpty([])).to.be.true;
    });
    it('should return false with a non-empty array parameter', function() {
        expect(isEmpty([1, 2, 3, 4])).to.be.false;
    });
    it('should return false with a string parameter', function() {
        expect(isEmpty("this is not empty")).to.be.false;
    });
    it('should return false with an object that has a splice() method and a non-zero length attribute', function() {
        const fakeObject = new Object();
        fakeObject.splice = function() { return; }
        fakeObject.length = 1;
        expect(isEmpty(fakeObject)).to.be.false;
    });

    //Test isTypedArray branch
    it('should return true with an empty typed array', function() {
        expect(isEmpty(new Uint8Array())).to.be.true;
    });
    it('should return false with a non-empty typed array', function() {
        expect(isEmpty(new Uint8Array(1))).to.be.false;
    });

    //Test isArguments branch
    it('should return true with an empty arguments object', function() {
        expect(isEmpty(function(){return arguments}())).to.be.true;
    });

    //Test map and set branch
    it('should return false with a non-empty map', function() {
        const map = new Map();
        map.set('a', 1);
        map.set('b', 2);
        expect(isEmpty(map)).to.be.false;
    });

    //Test prototype branch
    it('should return true with an Object prototype', function() {
        expect(isEmpty(Object.prototype)).to.be.true;
    });

    //Test generic object branch
    it('should return true with an Object that has no own properties', function () {
        expect(isEmpty(new Object())).to.be.true;
    });
    it('should return false with an Object that has some string-keyed properties', function() {
        const obj = new Object();
        obj.testProperty = "test";
        expect(isEmpty(obj)).to.be.false;
    });
});
