/**
 *
 * @param arr: {Array}
 * @param n: {Number}
 * @returns {Number}
 */
module.exports.nThNoRepeatedValue = function nThNoRepeatedValue(arr, n) {
    try {
        let kolichestvo = 0
        let uniqNum = 0
        let vstavka = 0
        for (let elem of arr) {
            if (!arr.slice(elem, arr.length).includes(elem)) {
                kolichestvo += 1
                uniqNum +=1
                if (uniqNum === n) {
                vstavka = arr.indexOf(elem)
                }
            } 
        }
        return arr[vstavka]
    } catch {
        throw new Error('Task not implemented');
    }
}



/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.primeValues = function primeValues(arr) {
    try {
        let newArr = [];
        for (let num of arr) {
            newArr.push(primality(num))
        }
        return newArr;
    } catch {
        throw new Error('Task not implemented');
    }
}

function primality(n) {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}
