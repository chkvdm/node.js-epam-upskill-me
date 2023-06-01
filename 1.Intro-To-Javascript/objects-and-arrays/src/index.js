/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.numberOfDuplicates = function numberOfDuplicates(arr) {
    try { 
        let newArr = [];
        let element = 0;
        for (let num of arr) {
            let chislo = 1;
            if ((arr.slice(0, element)).length !== 0) {
                for (let cow of arr.slice(0, element)) {
                    if (cow == num) {
                        chislo +=1;
                    } else {
                        continue;
                    }
                }
            }
            element +=1;
            newArr.push(chislo);
        }
        arr = newArr;
        return newArr;
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @param obj: {Object}
 * @returns {Number}
 */
module.exports.countObjectStrength = function countObjectStrength(obj) {
    try {
        let ObjectStrength = 0;
        let costs = {
            undefined : 0,
            boolean   : 1,
            number    : 2,
            string    : 3,
            object    : 5,
            function  : 7,
            bigint    : 9,
            symbol    : 10
            };
        for (let key in costs) {
            let onePropertyCost = Object.getOwnPropertyNames(obj).filter(
                propertyName => typeof obj[propertyName] === key
            );
            ObjectStrength += onePropertyCost.length*costs[key];
    } return ObjectStrength
    } catch {
        throw new Error('Task not implemented');
    }
};
