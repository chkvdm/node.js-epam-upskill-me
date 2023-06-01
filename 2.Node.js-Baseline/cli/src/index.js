const path = require('path')
const rimraf = require("./rimraf")
const rename = require("./rename")


function getMethod () {
    if (typeof(process.argv[2]) === 'undefined') {
        throw Error('Please, write method name')
    } else {
        return process.argv[2];
    }
}

let methodName = getMethod ();


const grab = flag => {
    const flags = ["--path", "--from", "--to"];
    if (flags.includes(process.argv[3])) {
        let indexAfterFlag = process.argv.indexOf(flag) + 1;
        return process.argv[indexAfterFlag];
    } else {
        throw Error('Please, write correct method name');
    }
}

const parseFlag = flag => path.join(__dirname, '..', flag)


switch (methodName) {
    case "rimraf":
        let path = parseFlag(grab("--path"))
        rimraf(path, success = () => console.log('\nsuccess!'));
        break
    case "rename":
        let from = parseFlag(grab("--from"))
        let to = parseFlag(grab("--to"))
        rename(from, to, success = () => console.log('\nsuccess!!'))
        break
    default:
        throw new Error('Method not found');
}