module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'public/index.css': 'views/styles/index.styl', 
        }
      }
    },
    watch: {
      stylus: {
        files: 'views/styles/**/*.styl',
        tasks: ['stylus']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['stylus']);
  grunt.registerTask('dev', ['stylus', 'watch:stylus']);

};