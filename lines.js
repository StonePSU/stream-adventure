const through2 = require('through2');
const split = require('split');

var count =1;

process.stdin.pipe(split(/\n/)).pipe(through2(function(line, enc, callback) {
    if (count % 2 ===0) {
        this.push(line.toString().toUpperCase() + "\n");
    } else {
        this.push(line.toString().toLowerCase() + "\n");
    }
    
    count++;
    callback();
})).pipe(process.stdout);