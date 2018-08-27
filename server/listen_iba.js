#!/usr/bin/env node

var request = require("request");
var express = require("express");
var bodyparser = require("body-parser");
var url = require("url");
var querystring = require("querystring");
var GogsClient = require("gogs-client");


// not using gogsclient - dont know how
var api = new GogsClient("35.202.132.173:3000/api/v1");
api.searchRepos

var app = express();

/*
** General information
*/
var external_ip = "35.193.149.248";
var headers = {
		'Content-Type': 'application/json'
};
var	admin = {
	user: "regien",
	pass: "@testingrepo1"
};

/*
** consider moving every actions into a log file
** google cloud keep track of every transmision
** but having one in the internal server its also
** a good idea.
** TOKEN IMPLEMENTATION
*/

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyparser.json());


// LANDING PAGE-HOME "/"

app.get("/", (req, res, next) => {
	// display an image of barry or cat video - Ask Ramon
	res.end();
});


/*
**		CREATING A REPO "/create/repo"
*/

var	create_options_create_repo = (info, auth) => {
	let	data_string = JSON.stringify(info);
	let	options = {
		url: 'http://' + external_ip + ':3000/api/v1/admin/users/' + auth.username + '/repos',
		method: 'POST',
		headers: headers,
		body: data_string,
		auth: {
			 'user': auth.username ,
			 'pass': auth.password
		 }
	};
	return (options);
}

var	parse_repo_response = (json_answer) => {
	let	info = {};

	info.html_url = json_answer.html_url;
	info.clone_url = json_answer.clone_url;
	info.created_at = json_answer.created_at;
	info.private = json_answer.private;
	info.name = json_answer.name;
	info.full_name = json_answer.full_name;
	// id del repo
	info.id_repo = json_answer.id;
	return (info);
}

// info.status_code = true; <- make this a boolean
var	get_res_from_api = (info, auth) => {
	return new Promise( (resolve, reject) => {
		request(create_options_create_repo(info, auth), (error, res, body) => {
			if (res.statusCode === 201)
				info.status_code = true;
			console.log("status: " + res.statusCode);
			console.log(JSON.parse(res.body));
			if (info.status_code)
				info.sender = parse_repo_response(JSON.parse(res.body));
			else
				info.sender = JSON.parse(res.body);
			console.log("Printing body value (not res): " + body);
			console.log(info.sender);
			if (error)
				reject(error);
			resolve(res);
		});
	});
}

app.post("/create/repo", async (req, res, next) => {
	var	info = {};
	var	auth = {};
	info.status_code = false;
	var	res_api;

	console.log("POST request to -> /create/repo");	
	auth.username = req.query.username;
	auth.password = req.query.password;
	info.name = req.query.name;
	info.description = req.query.description;
	if (req.query.is_private === "true")
		info.private = true;
	else
		info.private = false;
	try {
		res_api = await get_res_from_api(info, auth);
		console.log("printing sender");
		console.log(info.sender);
		res.status(res_api.statusCode).send(JSON.stringify(info.sender));
		res.end();
		
	} catch (error) {
		console.log("OH noo an error ocurred " + error);
		res.status(res_api.statusCode).send(info.sender);
		res.end();
	}
});



/*
**		CREATE AN USER "/register"
** need:
** LOGIN_NAME - USERNAME - EMAIL - PASSWORD
*/



var	create_option_register = (info, auth) => {
	let	data_string = JSON.stringify(info);
	let options = {
		url: 'http://' + external_ip + ':3000/api/v1/admin/users',
		method: 'POST',
		headers: headers,
		body: data_string,
		auth: {
			 'user': admin.user ,
			 'pass': admin.pass
		 }
	};
	return (options);
}

var	get_res_from_api_modular = (info, auth, func_options) => {
	return new Promise( (resolve, reject) => {
		request(func_options(info, auth), (error, res, body) => {
			if (res.statusCode === 201)
				info.status_code = true;
			console.log("status: " + res.statusCode);
			info.sender = JSON.parse(res.body);
			console.log("Printing body value (not res): " + body);
			console.log(info.sender);
			if (error)
				reject(error);
			resolve(res);
		});
	});
}

app.post("create/user", async (req, res, next) => {
	let	info = {};
	let	res_api;

	info.username = req.query.username;
	info.password = req.query.password;
	info.login_name = req.query.username;
	info.email = req.query.email;

	console.log("POST request to -> /register");
	try {
		res_api = await get_res_from_api_modular(info, admin, create_option_register);
		console.log("printing sender");
		console.log(info.sender);
		res.status(res_api.statusCode).send(JSON.stringify(info.sender));
		res.end();
	} catch(error) {
		console.log("OH noo an error ocurred " + error);
		res.status(res_api.statusCode).send(info.sender);
		res.end();
	}
});


/*
**		GET INFORMATION ABOUT AN USER "/user/info"
**		connected to `CLI whoami`
**		check if you dont find value
*/

var		create_options_get_info = (info, auth) => {
//	let	data_string = JSON.stringify(info);
	let options = {
		url: 'http://' + external_ip + ':3000/api/v1/users/' + auth.username,
		auth: {
			 'user': auth.username ,
			 'pass': auth.password
		 }
	};
	console.log(options.url);
	return (options);
}

var	getres_from_api_modular_GET = (info, auth, func_options) => {
	return new Promise( (resolve, reject) => {
		request(func_options(info, auth), (error, res, body) => {
			if (error || res.statusCode === 404 || res.statusCode === 403)
				reject(error);
			console.log("status: " + res.statusCode);
			console.log("error: " + error);
//			if (res.statusCode === 201)
//				info.status_code = true;
			console.log("Printing body value (not res): " + body);
//			console.log(info.sender);
			resolve(res);
		});
	});
}

app.get("/user/info", async (req, res, next) => {
	// parse a body and complete the request
	let	info = {};
	let	auth = {};
	let	res_api;

	auth.username = req.query.username;
	auth.password = req.query.password;
//	info.login_name = req.query.username;
//	info.email = req.query.email;
	try {
		res_api = await getres_from_api_modular_GET(info, auth, create_options_get_info);
		info.sender = JSON.parse(res_api.body);
		console.log("printing sender");
		console.log(info.sender);
		res.status(203).send(JSON.stringify(info.sender));
		res.end();
	} catch(error) {
		console.log("OH noo an error ocurred " + error);
		res.status(404).send("invalid_user");
		res.end();
	}
});



app.listen(4500, () => {
	console.log("app listening in port 4500");
});
