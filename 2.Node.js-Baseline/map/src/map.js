/**
 * @param modify (Function) - Callback function that is applied to every element of received data.
 * @return Transform stream that emits a data it receives with modify callback applied to the data.
 */

const {Transform} = require('stream')

module.exports = (modify) => {
  return new Transform({
    objectMode: true,
    transform: (chunk, _, done) => {
      done(null, modify(chunk))
    }
  })
}
