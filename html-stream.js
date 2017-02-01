var trumpet = require('trumpet')
var through2 = require('through2')

function transform(chunk, enc, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
}

var tr = trumpet();

var stream = tr.select(".loud").createStream();
stream.pipe(through2(transform)).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);

//stream.pipe(through2(transform)).pipe(process.stdout);  