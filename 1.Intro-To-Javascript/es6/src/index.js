'use strict';

/**
 *
 * @param str: {String}
 * @returns {Boolean}
 */
const isValidJSON = (str) => {
    try {
        if (JSON.parse(str)) {
            return true;
        }
    } catch {
        return false;
    }
}

/**
 *
 * @param params: {Object}
 * @returns {String}
 */
const greeting = (params) => {
    try {
        let newString = (`Hello, my name is ${params.name} ${params.surname} and I am ${params.age} years old.`);
        return newString;
    } catch {
        throw new Error('Task not implemented');
    }
}

/**
 *
 * @param params: {Array}
 * @returns {Array}
 */
 function unique(arr) {
    try {
        const newUniqueArr = Array.from(new Set(arr));
        return newUniqueArr
    } catch {
        throw new Error('Task not implemented');
    }
}

/**
 * 
 * @param arr: {Array}
 * @return {Iterator}
 */
 function* generator(arr) {
    try {
        for (let word of arr) {
            yield word;
        }
    } catch {
        throw new Error('Task not implemented');
    }
 }

module.exports = {
    isValidJSON,
    greeting,
    unique,
    generator
};