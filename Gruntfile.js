module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'public/index.css': 'styles/index.styl', 
        }
      }
    },
    watch: {
      stylus: {
        files: 'styles/**/*.styl',
        tasks: ['stylus']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['stylus']);
  grunt.registerTask('dev', ['stylus', 'watch:stylus']);

};