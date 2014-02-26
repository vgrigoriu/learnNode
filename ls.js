"use strict";

var fs = require('fs');
var path = require('path');

var folderName = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(folderName, function (err, files) {
    if (err) throw err;

    files.forEach(function (file) {
        var fileExtension = path.extname(file);

        if (fileExtension === extension)
            console.log(file);
    })
})
