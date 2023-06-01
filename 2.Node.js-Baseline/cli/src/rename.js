const fs = require("fs");


function rename (from, to, callback){
    fs.rename(from, to, err => {
        if (err) {
            throw err;
        }
        callback()
    });
};


module.exports = rename;