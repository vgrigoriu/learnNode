(function () {
    'use strict';

    var net = require('net');

    var server = net.createServer(function (connection) {
        connection.end('cucu');
    });

    server.listen(process.argv[2]);
})();
