#!/usr/bin/env node

var	argv = process.argv;
var	readline = require("readline"); // trying out a new module
var	fs = require("fs");
var	usages = require("./usage_cli.js");
var	readlineSync = require("readline-sync");
var	request = require("request");
var	exec = require("child_process").exec;

/*
** General information
*/

var	gogs_api_link = "http://35.193.149.248";
var api_link = "localhost";
var	user_info_path = process.env.HOME + "/.info_login"

/*
** TODO: Pass this in a README
**
** - register
** ADMIN
** call to Barry to use gogs-client and make a user
**
** - create [name_repo]
** USER OR ORGANIZATION
** post request creating a repo, return any error message
** git init in actual repo
** git remotes add [remote_repo] - add the remotes that the server return
** SUCCES message
** that's all the basic setup
**
** - test [name_repo]
** check the json, check the leanguage, look for script
** if not of this exist the test return what is needed and end the program
** run the repo in a docker in the vm, set up GCP if not just skipped
**
** - install [name_repo]
** search all the repos and look for the name, get the url and
** git clone [name_repo_complete]
** and execute install command inside the json
**
** TODO:
** EQUIVALENT OF NPM INIT
** - init
** FIVE READLINES TO CREATE THE REPO json
** 
** check outside TODO
** 
**
** TODO:
** when making an organization repo and a person wants to modify
** a repo, BASICALLY - HOW TO ADD A CONTRIBUTOR
*/

var	commands = [
	"login",
	"create",
	"test",
	"register",
	"init"
];


/*
** LOGIN COMMAND
*/

var	create_options_verify_user = (info) => {
	let	query = `/?username=${info.username}&password=${info.password}`;
	let	options = {
		url: 'http://' + api_link + ':4500/user/info' + query,
		auth: {
			 'user': info.username ,
			 'pass': info.password
		 }
	};
	return (options);
}

var	verify_user = (options) => {
	return new Promise ( (resolve, reject) => {
		request(options, (error, res, body) => {
			if (error || res.statusCode === 404)
				reject(error);
			console.log(body);
			resolve(res);
		});
	});
}

/*
** Not perfect, replace with vanilla way to do it
** can not backspace or exit from execution;
** DONT FORGET TO ENCODE PASSWORD
** TODO:
** CHECK IF USER EXIST or is invalid
*/
const get_user_data = async () => {
	let info = {};
	let is_data_valid = false;
	let options;
	let res_api;
	let res_body_parse;


	info.username = readlineSync.question("Username: ");
//	console.log(username);

	info.password = readlineSync.question("Password: ", {
		hideEchoBack: true
	});
//	console.log(`Esta is the password ${password}`);
	
	options = create_options_verify_user(info);
	try {
		res_api = await verify_user(options);
		res_body_parse = JSON.parse(res_api.body);
		console.log(res_body_parse);
		if (res_body_parse.email === "") {
			console.log("invalid password");
			process.exit();
		}
		let stringinfo = JSON.stringify(info, null, 2);
		is_data_valid = true;
		if (is_data_valid) {
			fs.writeFile(process.env.HOME + "/.info_login", stringinfo, (err) => {
				if (err)
					console.log(err);
			});
			console.log("succesfull login!\ninformation has been saved in ~/.info_login");
	}
	} catch(error) {
		console.log("Username doesn't exist");
		process.exit();
	}

}

/*
** CREATE COMMAND
** under actual login user
*/

var	create_options_repo = (info, auth) => {
	let	auth_query = `/?username=${auth.username}&password=${auth.password}`;
	let	data_query = `&name=${info.name}&description=${info.description}`;
	data_query += `&is_private=${info.is_private}`;
	let	query = auth_query + data_query;
	let	options = {
		url: 'http://' + api_link + ':4500/create/repo' + query,
		method: "POST"
	};
	return (options);
}

var	api_create_repo = (options) => {
	return new Promise ( (resolve, reject) => {
		request(options, (error, res, body) => {
			console.log(res.statusCode);
			if (error || res.statusCode === 404)
				reject(error);
			console.log(body);
			resolve(res);
		});
	});
}

var	create_repository = async (argv) => {
	let		auth_info = fs.readFileSync(user_info_path).toString();
	let		repo_info = {};
	let		res_api;
	let		options;
	let		body_res;
	let		execution_line;

	auth_info = JSON.parse(auth_info);
	if (auth_info === "undefined" || auth_info.username === "undefined" || auth_info.password === "undefined") {
		console.log ("User has not login, use 'ford_app login' to use this service");
		process.exit();
	}
//	repo_info.name = readlineSync.question("Repository name: ");
	if (argv.length != 4) {
		console.log("ussage:");
		console.log(argv[1] + " create repo_name");
		process.exit();
	}
	repo_info.name = argv[3];
	repo_info.description = readlineSync.question("Description :");
	repo_info.is_private = readlineSync.question("private: (yes/no)");
	if (repo_info.is_private === "y" || repo_info.is_private === "yes")
		repo_info.is_private = "true";
	else
		repo_info.is_private = "false";
	options = create_options_repo(repo_info, auth_info);

	try {
		res_api = await api_create_repo(options);
		if (res_api.statusCode === 422) {
			console.error("Repository already exist");
			process.exit();
		}
		console.log(res_api.statusCode);
		body_res = JSON.parse(res_api.body);
		console.log(gogs_api_link  + body_res.clone_url.toString().substr(20));
		body_res.clone_url = gogs_api_link  + body_res.clone_url.toString().substr(20);
		execution_line = "mkdir " + argv[3] + "; cd " + argv[3] + "; git init ;"
		execution_line += " git remote add origin " + body_res.clone_url;
		exec(execution_line , (err, stdout) => {
			if (err)
				throw err;
		});
		// then initiate repo
		// git init -> add remotes -> done, happy coding
	} catch(error) {
		console.log("an error has ocurred: " + error);
		process.exit();
	}
}

/*
** TODO:
** this is a lame way to iterate betwween the arguments
** av[2].toString().trim() then check?
** ^ need to be an string
** ask someoene
*/

const	parse_commands = (av) => {
	for (let i = 0; commands[i]; ++i) {
		if (av[2] === commands[i])
			return (i);
	}
	return (-1);
}

/*
** TODO:
** ask ramon or christian - improve executer
** maybe making a dispatch table inside a json could be a great idea
*/

const	execute_function = (i) => {
	if (i === 0)
		get_user_data();
	else if (i === 1)
		create_repository(argv);
	else if (i === 2)
		;
}


const	parse_argv = (argv) => {
	let		i;

	if (argv.length == 2)
		usages.display();
	else {
		i = parse_commands(argv);
		if (i === -1)
			process.exit();
		else
			execute_function(i);
	}
}

/*
const	login_form = () => {
		console.log("entering login_form");
}
*/



parse_argv(argv);
