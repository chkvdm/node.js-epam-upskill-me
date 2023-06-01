/**
 *
 * @param array1: {Array}
 * @param array2: {Array}
 * @returns {Array}
 */
module.exports.arrayDiff = function arrayDiff(array1, array2) {
    try {
        let newArr = []
        for (num of array1) {
            if (!(array2.includes(num))) {
                newArr.push(num)
            }
        }
        for (num of array2) {
            if (!(array1.includes(num))) {
                newArr.push(num)
            }
        }
        return newArr
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Array}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y) {
    try {
        let newArr = []
        for (let first = x; first <= y; ++first) {
            newArr.push(first)
        }
        let spisok = []
        for (let num of newArr) {
            if (num % 2 === 0) {
                spisok.push(num + ' is even')
            } else {
                spisok.push(num + ' is odd')
            }
        }
        return spisok
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum = function rangeSum(x, y) {
    try {
        let newArr = []
        for (let first = x; first <= y; ++first) {
            newArr.push(first)
        }
        let allSum = 0
        for (num of newArr) {
            allSum += +num
        }
        return allSum
    } catch {
        throw new Error('Task not implemented');
    }
};
