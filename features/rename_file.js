var fs = require('fs');

exports.RenameFile = function () {
    fs.rename('newfileold.txt', 'newfileeee.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
}