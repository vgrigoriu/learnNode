"use strict";

var http = require('http');
var bl = require('bl');

var url = process.argv[2];

var response = http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if (err) return console.error('Error getting ' + url, err);

        var content = data.toString();
        console.log(content.length);
        console.log(content);
    }));
});
