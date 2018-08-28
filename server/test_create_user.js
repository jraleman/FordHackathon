var request = require('request');
var external_ip = "35.193.149.248";

var headers = {
		'Content-Type': 'application/json'
};

var dataString = '{"login_name": "gabriel", "username": "gabriel", "email": "test1@gmail.com", "password": "gabriel"}';

var options = {
url: 'http://' + external_ip + ':3000/api/v1/admin/users',
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
