var fs = require('fs');
exports.CreateFile = function () {
    fs.writeFile('newfileold.txt', 'Good Afternoon Sir!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}