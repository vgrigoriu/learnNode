"use strict";

var filteredls = require('./filteredls');

filteredls(process.argv[2], process.argv[3], function (err, files) {
    if (err) {
        return console.error('Error reading folder', err);
    }

    files.forEach(function (file) {
        console.log(file);
    })
})
