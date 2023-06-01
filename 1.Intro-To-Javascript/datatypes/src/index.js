/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    try { 
        if (symbolsCount < 1 || symbolsCount > str.length) {
            str = str;
        } else {
            let stringPart = str.slice(-symbolsCount)
                str = stringPart + str + stringPart;
        }
    } catch {
        throw new Error('Task not implemented');
    }
    return str
};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    try {
        if (Math.abs(z - x) < Math.abs(z - y)) {
            return x;
        } else {
            return y;
        }
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    try {
        let newArray = [];
        for (value of arr) {
            if (!(newArray.includes(value))) {
                newArray.push(value);
            } else {
                continue;
            }
        }
        arr = newArray
    } catch {
        throw new Error('Task not implemented');
    }
    return arr
};
