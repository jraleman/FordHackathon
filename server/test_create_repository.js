var request = require('request');
var external_ip = "35.193.149.248";

var headers = {
		'Content-Type': 'application/json'
};

var dataString = '{"name": "testing_repo_vaina", "description": "simple_1", "private": true}';

// fill this is a modular way to fill the information depending on the user
var options = {
	url: 'http://' + external_ip + ':3000/api/v1/admin/users/regien/repos',
	method: 'POST',
	headers: headers,
	body: dataString,
	auth: {
			 'user': 'regien',
			 'pass': '@testingrepo1'
	 }
};

function callback(error, res, body) {
	console.log("status: " + res.statusCode);
	console.log("printing res body : " + res);
	console.log(res.body);
	console.log(JSON.parse(res.body));

	res.on("data", (body) => {
		console.log("body: " + body);
	})


		if (!error && res.statusCode == 200) {
				console.log(body);
		}
}

request(options, callback);
