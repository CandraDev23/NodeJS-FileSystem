var fs = require('fs');

exports.ReadFile = function () {
    return fs.readFileSync('demo1.html');
}