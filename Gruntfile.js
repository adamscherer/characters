/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
              '* Web Calculators v<%= pkg.version %> by Umpteen Group\n' +
              '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              '* Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              '*/\n',
    jqueryCheck: 'if (!jQuery) { throw new Error(\"Web Calculators requires jQuery\") }\n\n',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['js/*.js']
      },
      test: {
        src: ['js/tests/unit/*.js']
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      calculations: {
        src: [
          'js/lib/jquery-1.8.3.min.js',
          'js/lib/jquery.placeholder.js',
          'js/lib/bootstrap.min.js',
          'js/lib/bootstrap-select.js',
          'js/lib/flatui-checkbox.js',
          'js/lib/flatui-radio.js',
          'js/health-calculator.js',
          'js/brewing-calculator.js',
          'js/publishing-calculator.js',
          'js/finance-calculator.js',
          'js/conversion-calculator.js',
          'js/application.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      calculations: {
        src: ['<%= concat.calculations.dest %>'],
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    recess: {
      options: {
        compile: true,
        banner: '<%= banner %>'
      },
      application: {
        src: ['less/flat-ui.less'],
        dest: 'css/app.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['less/flat-ui.less'],
        dest: 'css/app.min.css'
      }
    },

    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: ['js/tests/*.html']
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

    jekyll: {
      dist: {
        options: {

        }
      }
    },

    validation: {
      options: {
        reset: true
      },
      files: {
        src: ["_site/**/*.html"]
      }
    },

    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit', 'dist', 'jekyll']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      recess: {
        files: 'less/*.less',
        tasks: ['recess', 'dist', 'jekyll']
      },
      html: {
        files: ['*.html', '_layouts/*.html', '_includes/*.html'],
        tasks: ['dist', 'jekyll']
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('browserstack-runner');

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll', 'validation']);

  // Test task.
  var testSubtasks = ['dist-css', 'jshint', 'qunit'];
  // Only run if there is a BrowserStack key
  if (process.env.BROWSERSTACK_KEY) {
    testSubtasks.push('browserstack_runner');
  }
  grunt.registerTask('test', testSubtasks);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js']);

  // Default task.
  grunt.registerTask('default', ['test', 'dist', 'validate-html']);

};