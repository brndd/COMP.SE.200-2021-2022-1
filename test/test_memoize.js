import { performance } from 'perf_hooks';
import { expect } from 'chai';
import memoize from '../src/memoize.js';

describe('memoize()', function() {
    //Test example cases
    it("should work with the example cases of the function", function() {
        const object = { 'a': 1, 'b': 2 };
        const other = { 'c': 3, 'd': 4 };
        const values = memoize(Object.values);
        expect(values(object)).to.eql([1, 2]);
        expect(values(other)).to.eql([3, 4]);

        object.a = 2;
        expect(Object.values(object)).to.eql([2, 2]);
        expect(values(object)).to.eql([1, 2]);

        values.cache.set(object, ['a', 'b']);
        expect(values(object)).to.eql(['a', 'b']);
    });

    it("should allow replacing the cache with a WeakMap", function() {
        memoize.Cache = WeakMap;
        const object = { 'a': 1, 'b': 2 };
        const other = { 'c': 3, 'd': 4 };
        const values = memoize(Object.values);
        expect(values(object)).to.eql([1,2]);
        expect(values(other)).to.eql([3, 4]);

        object.a = 2;
        expect(values(object)).to.eql([1, 2]);

        expect(values.cache).to.be.a('WeakMap');

        //Reset this just to be safe
        memoize.Cache = Map;
    });

    it("should allow passing a resolving function", function() {
        function dummyResolver(...args) {
            return args[0];
        }

        const object = { 'a': 1, 'b': 2 };
        const other = { 'c': 3, 'd': 4 };
        const values = memoize(Object.values, dummyResolver);
        expect(values(object)).to.eql([1, 2]);
        expect(values(other)).to.eql([3, 4]);

        object.a = 2;
        expect(Object.values(object)).to.eql([2, 2]);
        expect(values(object)).to.eql([1, 2]);

        values.cache.set(object, ['a', 'b']);
        expect(values(object)).to.eql(['a', 'b']);
    });

    //Misc tests
    it("should speed up a horribly inefficient recursive fibonacci function", function() {
        const calculateTo = 100; //the first 100 numbers using this function will normally take a very long time to compute, timing out the test

        var startTime = performance.now();
        const fibMemo = memoize(
            (n) => {
                if(performance.now() - startTime > 2000) {
                    throw new Error("function running time exceeded 2000 milliseconds");
                }
                if(n <= 1) {
                    return n;
                }
                else {
                    return fibMemo(n - 1) + fibMemo(n - 2);
                }
            }
        );

        expect(() => fibMemo(calculateTo)).to.not.throw();
    });


});