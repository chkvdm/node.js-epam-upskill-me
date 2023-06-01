import * as assert from "assert";
import {getProperty, Queue} from "../src";

describe('test getProperty', () => {
    it('should get string from object', () => {
        assert.strictEqual(getProperty({test: 'testValue'}, 'test'), 'testValue');
    });

    it('should get array from object', () => {
        assert.deepStrictEqual(getProperty({2: [1, 2, 3]}, 2), [1, 2, 3]);
    });

    it('should get object from array', () => {
        assert.deepStrictEqual(getProperty([{a: 0}, {a: 1}, {a: 2}], 2), {a: 2});
    });

    it('should get object from object', () => {
        assert.strictEqual(getProperty({a: 2, b: 3}, 'b'), 3);
    });
});

describe('test queue', () => {

    it('should return whole queue', () => {
        const queue = new Queue<Array<string>>();
        queue.push(['first']);
        queue.push(['second']);
        assert.deepStrictEqual(queue.getValue(), [['first'], ['second']]);
    });

    it('should return primitive value from queue when pop()', () => {
        const queue = new Queue<number>();
        queue.push(1);
        queue.push(2);
        assert.strictEqual(queue.pop(), 1);
    });

    it('should return reduced queue state', () => {
        const queue = new Queue<{ value: number }>();
        queue.push({value: 2});
        queue.push({value: 42});
        queue.pop();
        assert.deepStrictEqual(queue.getValue(), [{value: 42}]);
    });

});
