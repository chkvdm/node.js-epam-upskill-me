/**
 * @desc Makes a stream from an array of data.
 * @param array (any[]) - Array of data.
 * @return Readable - that emits every element of the array from left to right. Emits null when all elements
 * were pushed.
 */

const Readable = require('stream');


module.exports = (array) => {
  const readable = new Readable.Readable({objectMode: true});
  array.forEach(item => readable.push(item));
  readable.push(null);
  return readable;
}