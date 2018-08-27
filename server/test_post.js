#!/usr/bin/env node

var http = require("http");

// if i remember correctly you need to put an extra header
// for authentification
var options = {
	hostname: "localhost",
	port: 4500,
	path: "/register",
	method: "POST",
	headers: {
		'Content-Type': 'application/json',
	}
};

var req = http.request(options, (res) => {
	console.log("Status: " + res.statusCode);
	console.log("Headers " + JSON.stringify(res.headers));
	res.setEncoding("utf8");
	res.on("data", (body) => {
		console.log("body: " + body);
	})
});

req.on("error", (error) => {
	console.log("problem with request: " + error.message);
});

req.write('{"string": "Hello, World"}');
req.end();
