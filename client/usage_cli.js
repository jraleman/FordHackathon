var exports = module.exports = {};


exports.display = () => {
	process.stdout.write("Usage: fordev [command] [args]\n");
	process.stdout.write("\tcommands:\n");
	process.stdout.write("\tlogin - verify your credentials\n");
	process.stdout.write("\tcreate name_project - create a repo on the cloud\n");
	process.stdout.write("\ttest - test your project in a container in the cloud\n");
}
