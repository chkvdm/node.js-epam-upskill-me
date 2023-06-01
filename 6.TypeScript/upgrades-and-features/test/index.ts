import * as assert from "assert";
import {countdown, countOccurrences} from "../src";

describe('countdown', () => {
    it('should return [10,9,8,7,6,5,4,3,2,1] for given input (10, 1)', () => {
        assert.deepStrictEqual([...countdown(10, 1)], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });

    it('should return [5,4,3,2,1,0] for given input (5, 0)', () => {
        assert.deepStrictEqual([...countdown(5, 0)], [5, 4, 3, 2, 1, 0]);
    });

    it('should return [15,14,13,12,11,10] for given input (15, 10)', () => {
        assert.deepStrictEqual([...countdown(15, 10)], [15, 14, 13, 12, 11, 10]);
    });

    it('should return {value: 3, done: false} for given input (3, 0)', () => {
        assert.deepStrictEqual(countdown(3, 0).next(), {value: 3, done: false});
    });
});

describe('countOccurrences', () => {
    it('should return 3 for given input ([1, 1, 2, 1, 2, 3], 1)', () => {
        assert.strictEqual(countOccurrences([1, 1, 2, 1, 2, 3], 1), 3)
    });

    it('should return 2 for given input ([1, 1, 2, 1, 2, 3], 2)', () => {
        assert.strictEqual(countOccurrences([1, 1, 2, 1, 2, 3], 2), 2)
    });

    it('should return 1 for given input ([1, 1, 2, 1, 2, 3], 3)', () => {
        assert.strictEqual(countOccurrences([1, 1, 2, 1, 2, 3], 3), 1)
    });

    it('should return 2 for given input (["a", "a", "c", "c", "c", "b"], "a")', () => {
        assert.strictEqual(countOccurrences(["a", "a", "c", "c", "c", "b"], "a"), 2)
    });

    it('should return 0 for given input (["a", "a", "c", "c", "c", "b"], "e")', () => {
        assert.strictEqual(countOccurrences(["a", "a", "c", "c", "c", "b"], "e"), 0)
    });
});
