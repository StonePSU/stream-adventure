const http = require('http');
const through2 = require('through2');

var server = http.createServer(function(req, res) {
    if (req.method === "POST") {
        req.pipe(through2(function(chunk, enc, callback) {
            this.push(chunk.toString().toUpperCase());
            callback();
        })).pipe(res);
    }
    
});
server.listen(process.argv[2]);