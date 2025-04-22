const fs = require('fs');
const util = require('util');

//read from file
const readFromFile = util.promisify(fs.readFile)

//modify or create file

module.exports = { readFromFile }
