var fs = require('fs');

exports.DeleteFile = function () {
    fs.unlink('newfileeee.txt', function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });
}