import * as assert from "assert";
import {
    times,
    logger, everyNth
} from '../src';

describe('times', () => {
    it('should copy array 2 times', () => {
        const result = times([1, 2, 3], 2);
        assert.deepStrictEqual(result, [1, 2, 3, 1, 2, 3]);
    });

    it('should copy array 3 times', () => {
        const result = times([1, 2, 3], 3);
        assert.deepStrictEqual(result, [1, 2, 3, 1, 2, 3, 1, 2, 3]);
    });

    it('should copy array 2 times when no times count specified', () => {
        const result = times([1, 2, 3]);
        assert.deepStrictEqual(result, [1, 2, 3, 1, 2, 3]);
    });
});

describe('logger', () => {
    it('should log user events', () => {
        const result = logger(['User Event 1', 'User Event 2'], {serviceName: 'user', serviceId: 12});
        const expected = {
            '12-0': '[user] User Event 1',
            '12-1': '[user] User Event 2',
        };
        assert.deepStrictEqual(result, expected)
    });

    it('should log auth events', () => {
        const result = logger(['Event 1', 'Event 2', 'Event 3'], {serviceName: 'auth', serviceId: 2});
        assert.strictEqual(result['2-1'], '[auth] Event 2')
    });

    it('should log global events', () => {
        const result = logger(['Event 1', 'Event 2', 'Event 3']);
        assert.strictEqual(result['1-2'], '[global] Event 3')
    });
});

describe('everyNth', () => {
    it('should return [1, 2, 3, 4, 5, 6] for given input [1, 2, 3, 4, 5, 6]', () => {
        assert.deepStrictEqual(everyNth([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
    });

    it('should return [2, 4, 6] for given input [1, 2, 3, 4, 5, 6]', () => {
        assert.deepStrictEqual(everyNth([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
    });

    it('should return [3, 6] for given input [1, 2, 3, 4, 5, 6]', () => {
        assert.deepStrictEqual(everyNth([1, 2, 3, 4, 5, 6], 3), [3, 6]);
    });

    it('should return [5] for given input [1, 2, 3, 4, 5, 6]', () => {
        assert.deepStrictEqual(everyNth([1, 2, 3, 4, 5, 6], 5), [5]);
    });

    it('should return [] for given input [1]', () => {
        assert.deepStrictEqual(everyNth([1], 5), []);
    });
});
