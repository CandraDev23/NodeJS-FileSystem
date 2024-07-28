var http = require('http');
var url = require('url');
var fs = require('fs');
var readfile = require('./features/read_file');
const createfile = require('./features/create_file');
const deletefile = require('./features/delete_file');
const renamefile = require('./features/rename_file');
const readfileurl = require('./features/readfile_url');

http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // // deletefile.DeleteFile();
    // createfile.CreateFile();
    // // renamefile.RenameFile();
    // res.end();
    readfileurl.ReadfileUrl(req, res);
}).listen(8000);

console.log("server running on http://localhost:8000");