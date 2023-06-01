/**
 *
 * @returns {Null}
 */
module.exports.Logger = function logger() {
    try {
        this.logs = [];
        this.log = function(name) {
            this.logs.push(name);
        }
        this.getLog = function() {
            return this.logs;
        }
        this.clearLog = function() {
            this.logs.length = 0;
        }
    } catch {
        throw new Error('Task not implemented');
    }
};

/**
 *
 * @returns {Array}
 */
// Change this function and implement task
Array.prototype.shuffle = function () {
    try {
        let copyArr = this.slice()
        let currentIndex = copyArr.length;
        let randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [copyArr[currentIndex], copyArr[randomIndex]] = [copyArr[randomIndex], copyArr[currentIndex]];
        }
        return copyArr;
    } catch {
        throw new Error('Task not implemented');
    }
};