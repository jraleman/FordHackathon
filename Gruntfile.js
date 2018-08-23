module.exports = function(grunt) {
  grunt.initConfig({
    // jshint: {
    //   files: ['Gruntfile.js', 'src/**/*.js', 'public/**/*.js'],
    //   options: {
    //     globals: {
    //       jQuery: true
    //     }
    //   }
    // },
    // watch: {
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint']
    // },
    uncss: {
      dist: {
        src: ['public/index.html'],
        dest: 'dist/cleaned.css',
        options: {
          report: 'min' // optional: include to report savings
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/cleaned.css': ['public/index.html']
        }
      }
    }
  });
  // grunt.registerTask('default', ['jshint']);
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uncss']);
  grunt.loadNpmTasks('grunt-uncss');
};
