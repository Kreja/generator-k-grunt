'use strict';

module.exports = function(grunt) {

  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          cwd: './',
          src: "./page/**/*.jade",
          dest: './build/',
          ext: '.html'
        }]
      }
    },
    sass: {
      output : {
        options: {
          style: sassStyle
        },
        files: [{
          expand: true,
          cwd: './',
          src: "./page/**/*.scss",
          dest: './build/',
          ext: '.css'
        }]
      }
    },
    postcss: {
        options: {
          map: true,
          cascade: true,
          pretty: true,
          expand: true,
          processors: [
            require('pixrem')(),
            require('autoprefixer-core')({browsers: 'last 2 versions'}),
            require('cssnano')()
          ]
        },
        dist: {
            files: [{
                expand: true,
                flatten: false,
                src: './build/page/**/*.css'
            }]
        }
    },
    jshint: {
      all: ['./page/**/*.js']
    },
    concat: {
      dist: {
        files: [{
          expand: true,
          cwd: './',
          src: "./page/**/*.js",
          dest: './build/',
          ext: '.js'
        }]
      },
    },
    uglify: {
      compressjs: {
        files: [{
          expand: true,
          cwd: './',
          src: "./build/page/**/*.js",
          dest: './',
          ext: '.js'
        }]
      }
    },
    clean: ["./build/page"],
    watch: {
      scripts: {
        files: ['./page/**/*.js'],
        tasks: ['jshint','concat','uglify']
      },
      jade: {
        files: ['./page/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['./page/**/*.scss'],
        tasks: ['sass']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              './page/**/*.jade',
              './page/**/*.scss',
              './page/**/*.js'
          ]
      }
    },
    connect: {
      options: {
          port: 9000,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 9000,
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('outputhtml',['jade']);
  grunt.registerTask('outputcss',['sass']);
  grunt.registerTask('outpostcss',['postcss']);
  grunt.registerTask('concatjs',['concat']);
  grunt.registerTask('hintjs',['jshint']);
  grunt.registerTask('compressjs',['jshint','concat','uglify']);
  grunt.registerTask('serve',['jade','sass','postcss','jshint','concat','uglify','connect','watch']);
  grunt.registerTask('default');

};
