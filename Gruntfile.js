module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uncss: {
            dist: {
                files: {
                    'tidy.css': ['public/index.html']
                }
            }
        }
    });
    // Register the tasks we need
    grunt.loadNpmTasks('grunt-uncss');
    // Define the default tasks
    grunt.registerTask('default', ['uncss']);
}
