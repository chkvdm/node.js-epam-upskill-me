const { Readable } = require('stream');
const fs = require('fs');

function createReadableStream(filePath) {

  class ReadStream extends Readable {

    constructor(filePath) {
      super();
      this.fd = fs.openSync(filePath, 'r');
    }

    _read(size) {
      const buf = Buffer.alloc(64*1024);
      fs.read(this.fd, buf, 0, buf.length, null, (err, bytesRead) => {
        if (err) {
          this.destroy(err)
        } else {
          this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
        }
      })
    }

    _destroy(err, callback) {
      if (this.fd) {
        fs.close(this.fd, (er) => callback(er || err));
      } else {
        callback(err)
      }
    }

  }
 
  const readble = new ReadStream(filePath);

  return readble
}

module.exports = createReadableStream;
