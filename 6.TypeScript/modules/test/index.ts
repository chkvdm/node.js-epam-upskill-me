import * as assert from "assert";
import {
    arrayHelpers,
    objectHelpers
} from '../src';

const {flatten, take} = arrayHelpers;
const {clone, invert} = objectHelpers;

describe('array flatten', () => {
    it('should return [1,2,3] for given input [[1],[2],[3]]', () => {
        assert.deepStrictEqual(flatten([[1], [2], [3]]), [1, 2, 3]);
    });

    it('should return [4,5,6] for given input [[4],5,[6]]', () => {
        assert.deepStrictEqual(flatten([[4], 5, [6]]), [4, 5, 6]);
    });

    it('should return [1,2,3,4,5,6] for given input [[1],2,[3,4,[5]],[[[6]]]]', () => {
        assert.deepStrictEqual(flatten([[1], 2, [3, 4, [5]], [[[6]]]]), [1, 2, 3, 4, 5, 6]);
    });

    it('should return ["a", "b", "c", "d"] for given input [["a"], ["b", ["c", [["d"]]]]]', () => {
        assert.deepStrictEqual(flatten([["a"], ["b", ["c", [["d"]]]]]), ["a", "b", "c", "d"]);
    });

    it('should return ["a", "b", "c", "d"] for given input [["a"], ["b", ["c", [["d"]]]]]', () => {
        assert.deepStrictEqual(flatten([{a: [1, 2, 3]}, [[{b: {d: 4}}], {c: "3"}]]), [{a: [1, 2, 3]}, {b: {d: 4}}, {c: "3"}]);
    });
});

describe('array take', () => {
    it('should return first 2 elements [1,2] for given input [1,2,3,4]', () => {
        assert.deepStrictEqual(take([1, 2, 3, 4], 2), [1, 2]);
    });
    it('should return first 3 elements ["a", "b", "c"] for given input ["a", "b", "c", "d", "e"]', () => {
        assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 3), ["a", "b", "c"]);
    });
    it('should return first element [{a: 1}] for given input [{a: 1}, {a: 2}, {a: 3}]', () => {
        assert.deepStrictEqual(take([{a: 1}, {a: 2}, {a: 3}], 1), [{a: 1}]);
    });
});

describe('object clone', () => {
    it('should clone object {a: 2, b: 3}', () => {
        const initialObject = {a: 2, b: 3};
        const copiedObject = clone(initialObject);
        assert.notStrictEqual(initialObject, copiedObject);
    });

    it('should deeply clone object {a: 2, b: {c: 3}}', () => {
        const initialObject = {a: 2, b: {c: 3}};
        const copiedObject = clone(initialObject);
        assert.notStrictEqual(initialObject.b, copiedObject.b);
    });

    it('should have equal structure after cloning object {a: 2, b: {c: 3}}', () => {
        const initialObject = {a: 2, b: {c: 3}};
        const copiedObject = clone(initialObject);
        assert.deepStrictEqual(initialObject, copiedObject);
    });
});

describe('object invert', () => {
    it('should return {a: 1, b: 2, c: 3} for given input {1: "a", 2: "b", 3: "c"}', () => {
        assert.deepStrictEqual(invert({1: "a", 2: "b", 3: "c"}), {a: 1, b: 2, c: 3});
    });
    it('should return {one: "first", two: "second"} for given input {first: "one", second: "two"}', () => {
        assert.deepStrictEqual(invert({"first": 'one', "second": 'two'}), {"one": 'first', "two": 'second'});
    });

    it('should return {1: "a", 2: "b", 3: "c"} for given input {a: 1, b: 2, c: 3}', () => {
        assert.deepStrictEqual(invert({a: 1, b: 2, c: 3}), {1: "a", 2: "b", 3: "c"});
    });
});
