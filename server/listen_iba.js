#!/usr/bin/env node

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
** consider moving every actions into a log file
** google cloud keep track of every transmision
** but having one in the internal server its also
** a good idea.
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


// CREATING A REPO "/create/repo"

app.post("/create/repo", (req, res, next) => {

	console.log("POST request to -> /create/repo");	
	res.end();
});

// CREATE AN USER "/register"

app.post("/register", (req, res, next) => {
	let	username = req.query.username;
	let	password = req.query.password;

	console.log("POST request to -> /register");
	console.log(`user = ${username} & pass = ${password}`);
	// implement validation with gogs-client
	// 
	res.end();
});

app.listen(4500, () => {
	console.log("app listening in port 4500");
});

// GET INFORMATION ABOUT AN USER "/user/info"

app.get("/user/info", (req, res, next) => {
	// parse a body and complete the request
	res.end();
});
