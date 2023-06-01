/**
 * @desc Implements Promise.race.
 * @param promises
 */
module.exports = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(element => {
      Promise.resolve(element)
      .then(res => resolve(res), err => reject(err))
      .catch(error => console.log(error.message))
    })
  });
}
