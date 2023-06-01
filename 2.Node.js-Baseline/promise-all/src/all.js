/**
 * @desc Implements Promise.all.
 * @param promises
 */
module.exports = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    
    promises.forEach((value, index) => {
      Promise.resolve(value).then(result => {
        results[index] = result;
          completed += 1;  
        if (completed == promises.length) {
          resolve(results);
        }
      }).catch(err => reject(err));
    });
 });
}
