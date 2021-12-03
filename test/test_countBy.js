import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy()', function() {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
    // Counting active
    it("should return { 'true': 2, 'false': 1 } when counts\n [\n{ 'user': 'barney', 'active': true },\n{ 'user': 'betty', 'active': true },\n{ 'user': 'fred', 'active': false }\n]  by active", function() {      
        expect(countBy(users, value => value.active)).to.deep.equal({ 'true': 2, 'false': 1 });
    });
    // Counting users
    it("should return { 'barney': 1, 'betty': 1, 'fred': 1 } when counts\n [\n{ 'user': 'barney', 'active': true },\n{ 'user': 'betty', 'active': true },\n{ 'user': 'fred', 'active': false }\n]  by user", function() {
        expect(countBy(users, value => value.user)).to.deep.equal({ 'barney': 1, 'betty': 1, 'fred': 1 });
    });
    // Count non-existent value
    it("should return {'undefined': 3} when counts [\n{ 'user': 'barney', 'active': true },\n{ 'user': 'betty', 'active': true },\n{ 'user': 'fred', 'active': false }\n]  by non-existing value", function() {
        expect(countBy(users, value => value.phone)).to.deep.equal({'undefined': 3});
    });
    // Empty
    it("should return empty on empty collection", function(){
        const vec = [];
        expect(countBy(vec, value => value.false)).to.deep.equal({});
    });
    // Numeric collection comparison
    it("should return { 'true': 2, 'false': 2 } when counts [10,20,30,40] by value > 25", function(){
        const vec = [10,20,30,40];
        expect(countBy(vec, value => value > 25)).to.deep.equal({ 'true': 2, 'false': 2 });
    });
    // Testing with an object
    it("should return { 'true': 1 } when counts property when it's true", function(){
        const obj = new Object();
        obj.exists = true;
        expect(countBy(obj, value => value.exists)).to.deep.equal({ 'true': 1 });
    });
});
