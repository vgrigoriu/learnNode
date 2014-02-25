"use strict";

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, contents) {
    if (err) throw err;

    var lines = contents.split('\n');
    console.log(lines.length - 1);
});
