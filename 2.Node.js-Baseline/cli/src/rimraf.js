const fs = require("fs");


function rimraf (path, callback){
    fs.rm(path, { recursive: true }, (err) => {
        if (err) {
            return err;
        }
        callback()
    })
};


module.exports = rimraf;