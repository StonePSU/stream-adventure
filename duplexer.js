var spawn = require('child_process').spawn;
var duplexer2 = require('duplexer2');

module.exports = function(cmd, args) {
    // spawn the process and return a single stream
    var stream = spawn(cmd, args);
    
    // joining together the stdin and stdout here
    var duplex = duplexer2(stream.stdin, stream.stdout);
    return duplex;
};