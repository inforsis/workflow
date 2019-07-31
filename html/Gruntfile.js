module.exports = function(grunt) {

  const sass = require('node-sass');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //minificando arquivos (css e js)
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    //compilando o css
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/main.min.css': 'scss/main.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    //movendo arquivos do node_modules
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/material-design-icons/iconfont',
            src: '**',
            dest: 'fonts/material-design/'
          },
          {
            expand: true,
            cwd: 'node_modules/jquery/dist',
            src: 'jquery.min.js',
            dest: 'js/'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/js',
            src: 'bootstrap.bundle.min.js',
            dest: 'js/'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/css', 
            src: 'bootstrap.min.css',
            dest: 'css/'
          }
        ]
      },
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('build', ['sass', 'copy']);
  grunt.registerTask('copy', ['copy']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('css', ['sass']);

};