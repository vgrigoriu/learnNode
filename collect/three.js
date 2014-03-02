"use strict";

var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var content = ['', '', ''];
var howManyResponses = 0;

var processUrl = function (url, index) {
    http.get(url, function(response) {
        response.pipe(bl(function(err, data) {
            if (err) return console.error('Error getting ' + url, err);

            var body = data.toString();
            content[index] = body;
            howManyResponses++;
            if (howManyResponses === 3) {
                content.forEach(function (c) {
                    console.log(c);
                });
            }
        }));
    });
};

processUrl(url1, 0);
processUrl(url2, 1);
processUrl(url3, 2);
