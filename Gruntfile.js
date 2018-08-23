module.exports = function (grunt) {
    grunt.initConfig({
        purifycss: {
          options: {},
          target: {
            src: ['public/index.html'],
            css: ['public/css/styles.css'],
            dest: 'tmp/styles.css'
          },
        },
    });
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.registerTask('default', ['purifycss']);
}
