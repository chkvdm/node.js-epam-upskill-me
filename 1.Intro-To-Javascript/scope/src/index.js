/**
 *
 * @param startValue: {Number}
 * @returns {Function}
 */
module.exports.createCounter = function createCounter(startValue = 0) {
    try {
        let newValue = startValue;
        return function () {
            return ++newValue;
        };
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param x: {Number}
 * @returns {Function}
 */
module.exports.multiply = function multiply(x) {
    try {
        return function (c) {
            return function (b) {
                return x*c*b;
            };
        };
    } catch {
        throw new Error('Task not implemented');
    };
};
