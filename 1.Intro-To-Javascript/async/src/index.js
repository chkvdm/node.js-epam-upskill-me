/**
 *
 * @param data: {Array}
 * @returns number
 */
 module.exports.callback1 = function(data) {
    try {
        let result = data.reduce((a, b) => {
            return a + b;
            }
        );
        return result;
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param data: {Array}
 * @returns number
 */
module.exports.callback2 = function(data) {
    try {
        let result = data.reduce((a, b) => {
            return a * b;
            }
        );
        return result;
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param s: {string}
 * @returns number
 */
module.exports.w = function(s, callback) {
    try {
        let arrNumber = [];
        let arr = s.split(' ');
        for (let num of arr) {
            arrNumber.push(num.length)
        }
        return callback(arrNumber);
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param data: {Array | Object}
 * @returns {Function}
 */
module.exports.mocker = function mocker(data) {
    try {
        let users = data;
        return function() {
            return new Promise(function(resolve) {
                setTimeout(() => resolve(users), 1000);
            });
        };
    } catch {
    throw new Error('Task not implemented');
    }
};

/**
 *
 * @param arg...: {Promise[]}
 * @returns {Promise}
 */
module.exports.summarize1 = function summarize1() {
    try {
        let arr = []
        for (let i of arguments) {
            arr.push(i);
        }
        let all = Promise.all(arr).then(function(value) {return value.reduce((a, b) => a + b, 0);})
        return all;
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param arg...: {Promise[]}
 * @returns {Promise}
 */
 module.exports.summarize2 = async function summarize2() {
    try {
        let arr = []
        for (let i of arguments) {
            arr.push(i);
        }
        let all = Promise.all(arr).then(function(value){ return value.reduce((a, b) => a + b, 0)})
        return all
    } catch {
        throw new Error('Task not implemented');
    }
};
