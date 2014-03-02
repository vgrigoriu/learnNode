"use strict";

var fs = require('fs');
var path = require('path');

function filterfiles(folder, extension, callback) {
    fs.readdir(folder, function (err, files) {
        if (err) return callback(err);

        var filteredFiles = files.filter(function (file) {
            var fileExtension = path.extname(file);

            return fileExtension === '.' + extension;
        });

        callback(null, filteredFiles);
    })
}

module.exports = filterfiles;
