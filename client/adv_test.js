#!/usr/bin/env node

var	argv = process.argv;
var	readline = require("readline"); // trying out a new module
var	fs = require("fs");
var	usages = require("./usage_cli.js");
var	readlineSync = require("readline-sync");

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

// put everything inside here maybe diferent file


/*
const	user_data_exist = () => {
	
}
*/



/*
** Not perfect, replace with vanilla way to do it
** can not backspace or exit from execution;
** DONT FORGET TO ENCODE PASSWORD
** TODO:
** CHECK IF USER EXIST or is invalid
*/
const get_user_data = () => {
	let info = {};
	let is_data_valid = false;

	let username = readlineSync.question("Username: ");
	console.log(username);

	let password = readlineSync.question("Password: ", {
		hideEchoBack: true
	});
	console.log(`Esta is the password ${password}`);
	
	// do verification with intermediate API
	info.username = username;
	info.password = password;
	
	let stringinfo = JSON.stringify(info, null, 2);
	// check if file exist or not and proceed with login
	// if data invalid dont save it
	if (is_data_valid) {
		fs.writeFile(process.env.HOME + "/.info_something", stringinfo, (err) => {
			if (err)
				console.log(err);
		});
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
		;
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
