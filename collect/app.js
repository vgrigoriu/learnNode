"use strict";

var http = require('http');

var characterCount = 0;
var serverResponse = '';

var response = http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
        characterCount += chunk.length;
        serverResponse += chunk;
    });

    response.on('end', function() {
        console.log(characterCount);
        console.log(serverResponse);
    });
});
