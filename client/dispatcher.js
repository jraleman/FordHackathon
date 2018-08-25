var	readlineSync = require("readline-sync");
var	fs = require("fs");

var message_description = "Take your time with this one, this is for the store\n"

/*
** JSON with main functions
*/
var	dispatcher = module.exports = {};

/*
** add to a minimun of 8 so we can test the dispatcher.test();
** talk about the possiblity of using VM's or docker to test
** VM sometimes because of the ussage of window X server programs
** but dont priorityze it, it is another level of the development
** phase
** I DONT WANT TO PARSE TWICE SO WE ARE JUST GIVING AWAY
** TERMINATIONS, thank you
*/
var	available_leanguages = [
	"py",
	"go",
	"c"
];

const	get_programming_leanguage = (type) => {
	let i;
	let holder = type.toString().trim();

	if (holder === "Makefile")
		return ("Makefile");
	else {
		for (i = 0; i < available_leanguages.length; i++)
			if (available_leanguages[i] === holder)
				return("main." + holder);
	}
	return ("Makefile");
}


/*
** TODO; possibly changing of console.log() -> process.stdout.write();
** not fully done
*/
dispatcher.init = () => {
	let info = {};

	info.name = readlineSync.question("name: ");
	console.log(info.name); // remove me

	console.log(message_description);
	info.description = readlineSync.question("Description: ");


	console.log("if more is used, just specify is one is needed to run the program");
	console.log("otherwise fell free to use a Makefile");
	info.pro_leanguage = readlineSync.question("Programming Leanguage: (Makefile)");
	
	info.main = readlineSync.question("main: ");
	if (info.main.toString().trim() === "")
		get_programming_leanguage(info.pro_leanguage);
	
	
	// doing the initial setup let you test the project and get the
	// GUI get extra information
}



dispatcher.
