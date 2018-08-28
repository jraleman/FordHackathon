var request = require('request');

var headers = {
		'Content-Type': 'application/json'
};

var dataString = '{"login_name": "gabriel", "username": "gabriel", "email": "test1@gmail.com", "password": "gabriel"}';

var options = {
url: 'http://35.193.149.248:3000/api/v1/admin/users',
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

	console.log(res.body);
	res.on("data", (body) => {
		console.log("body: " + body);
	})


		if (!error && res.statusCode === 200) {
				console.log(body);
		}
}

function inside_wrapper() {
	return new Promise( (resolve, reject) => {
//		request(options, callback);
		request(options, (error, res, body) => {
			console.log("status: " + res.statusCode);
			console.log(res.body);
			
			if (error)
				reject(error);
//			resolve(body);// only returns body
			resolve(res);// only returns body
		});
	});
}

async function wrapper() {
	try {
		const html = await inside_wrapper();
		console.log("Funciona perra");
		console.log(html.body);
		console.log(html.statusCode);
	} catch (error) {
		console.log("ERROR");
		console.log(error);
	}
}

//request(options, callback);
wrapper();
