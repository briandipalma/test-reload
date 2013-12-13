"use strict";

var	http = require('http'),
	nodeStatic = require('node-static');

var file = new nodeStatic.Server('.');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);
