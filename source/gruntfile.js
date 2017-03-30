module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the Themeforest Standard Licenses\n' +
            ' */\n',


    // Task configuration
    // -------------------------------------------------------------------------------


    // Complile SCSS
    sass: {

      dev: {
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        },
        files: {
          'src/assets/css/theshots.css': 'src/assets/css/scss/theshots.scss'
        }
      },

      dist: {
        options: {
          sourceMap: false,
          outputStyle: 'expanded'
        },
        files: {
          'src/assets/css/theshots.css': 'src/assets/css/scss/theshots.scss',

          'src/assets/css/skins/skin-blue.css':   'src/assets/css/scss/skins/skin-blue.scss',
          'src/assets/css/skins/skin-brown.css':  'src/assets/css/scss/skins/skin-brown.scss',
          'src/assets/css/skins/skin-aqua.css':   'src/assets/css/scss/skins/skin-aqua.scss',
          'src/assets/css/skins/skin-gray.css':   'src/assets/css/scss/skins/skin-gray.scss',
          'src/assets/css/skins/skin-green.css':  'src/assets/css/scss/skins/skin-green.scss',
          'src/assets/css/skins/skin-orange.css': 'src/assets/css/scss/skins/skin-orange.scss',
          'src/assets/css/skins/skin-pink.css':   'src/assets/css/scss/skins/skin-pink.scss',
          'src/assets/css/skins/skin-purple.css': 'src/assets/css/scss/skins/skin-purple.scss',
          'src/assets/css/skins/skin-red.css':    'src/assets/css/scss/skins/skin-red.scss',
          'src/assets/css/skins/skin-teal.css':   'src/assets/css/scss/skins/skin-teal.scss',
          'src/assets/css/skins/skin-yellow.css': 'src/assets/css/scss/skins/skin-yellow.scss'
        }
      },

      dist_minified: {
        options: {
          sourceMap: false,
          outputStyle: 'compressed'
        },
        files: {
          'src/assets/css/theshots.min.css': 'src/assets/css/scss/theshots.scss',

          'src/assets/css/skins/skin-blue.min.css':   'src/assets/css/scss/skins/skin-blue.scss',
          'src/assets/css/skins/skin-brown.min.css':  'src/assets/css/scss/skins/skin-brown.scss',
          'src/assets/css/skins/skin-aqua.min.css':   'src/assets/css/scss/skins/skin-aqua.scss',
          'src/assets/css/skins/skin-gray.min.css':   'src/assets/css/scss/skins/skin-gray.scss',
          'src/assets/css/skins/skin-green.min.css':  'src/assets/css/scss/skins/skin-green.scss',
          'src/assets/css/skins/skin-orange.min.css': 'src/assets/css/scss/skins/skin-orange.scss',
          'src/assets/css/skins/skin-pink.min.css':   'src/assets/css/scss/skins/skin-pink.scss',
          'src/assets/css/skins/skin-purple.min.css': 'src/assets/css/scss/skins/skin-purple.scss',
          'src/assets/css/skins/skin-red.min.css':    'src/assets/css/scss/skins/skin-red.scss',
          'src/assets/css/skins/skin-teal.min.css':   'src/assets/css/scss/skins/skin-teal.scss',
          'src/assets/css/skins/skin-yellow.min.css': 'src/assets/css/scss/skins/skin-yellow.scss'
        }
      },

      doc: {
        options: {
          sourceMap: false,
          outputStyle: 'compressed'
        },
        files: {
          'docs/assets/css/custom.css': 'docs/assets/css/custom.scss'
        }
      }

    },
    

    // Watch on SCSS files
    watch: {
      sass: {
        files: ['src/assets/css/**/*.scss'],
        tasks: ['sass:dev'],
      }
    },
    

    // Clean files and directories
    clean: {
      options: {
        force: true
      },
      before_copy: ['dist'],
      after_copy: {
        src: ["dist/**/theshots.js",
              "dist/**/theshots.min.js",
              "dist/**/theshots.css",
              "dist/**/theshots.min.css",
              "dist/**/theshots.css.map",
              "dist/**/theshots.scss",
              "dist/**/css/scss"
              ],
      }
    },


    // Replace
    replace: {
      dist: {
        src: ['dist/theme/*.html'],
        overwrite: true,
        replacements: [{
          from: /    <link href="assets\/css\/theshots\.css" rel="stylesheet">\n/g,
          to: ""
        },
        {
          from: /    <script src="assets\/js\/theshots\.js"><\/script>\n/g,
          to: ""
        }]
      }
    },


    // Copy files
    copy: {
      dist: {
        files: [
          // dist folder
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/theme'}
        ],
      },

      source: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/source/src'},
          {expand: true, cwd: '.', src: ['package.json', 'gruntfile.js'], dest: 'dist/source'},
          
        ]
      },

      dev: {
        files: [
          {expand: true, cwd: 'src/assets/vendors/font-awesome/fonts', src: ['**'], dest: 'src/assets/fonts/'},
          {expand: true, cwd: 'src/assets/vendors/themify-icons/fonts', src: ['**'], dest: 'src/assets/fonts/'},
          {expand: true, cwd: 'src/assets/vendors/dropify/fonts', src: ['**'], dest: 'src/assets/fonts/'}
        ]
      }
    },

    // Concat file to make app.min
    concat: {
      dist: {
        files: {
          // Javascript
          'dist/theme/assets/js/app.js': [
            'src/assets/js/app.min.js',
            'src/assets/js/theshots.js'
          ],

          // Javascript - Minified
          'dist/theme/assets/js/app.min.js': [
            'src/assets/js/app.min.js',
            'src/assets/js/theshots.js'
          ],


          // CSS
          'dist/theme/assets/css/app.css': [
            'src/assets/css/app.min.css',
            'src/assets/css/theshots.css'
          ],

          // CSS - /minified
          'dist/theme/assets/css/app.min.css': [
            'src/assets/css/app.min.css',
            'src/assets/css/theshots.css'
          ]
        },
      },

      dev: {
        files: {
          // Javascript
          'src/assets/js/app.min.js': [
            'src/assets/vendors/jquery.min.js',
            'src/assets/vendors/bootstrap/js/bootstrap.min.js',
            'src/assets/vendors/switchery/switchery.min.js',
            'src/assets/vendors/lightslider/js/lightslider.min.js',
            'src/assets/vendors/lightgallery/js/lightgallery-all.min.js',
            'src/assets/vendors/lity/lity.min.js',
            'src/assets/vendors/dropify/js/dropify.min.js',
            'src/assets/vendors/dropzone/dropzone.min.js',
            'src/assets/vendors/jquery.mousewheel.min.js',
            'src/assets/vendors/matchHeight.min.js',
            'src/assets/vendors/jquery.countTo.js',
            'src/assets/vendors/jquery.highlight.js'
          ],

          // CSS
          'src/assets/css/app.min.css': [
            'src/assets/vendors/bootstrap/css/bootstrap.min.css',
            'src/assets/vendors/switchery/switchery.min.css',
            'src/assets/vendors/lightslider/css/lightslider.min.css',
            'src/assets/vendors/lightgallery/css/lightgallery.min.css',
            'src/assets/vendors/font-awesome/css/font-awesome.min.css',
            'src/assets/vendors/themify-icons/css/themify-icons.css',
            'src/assets/vendors/lity/lity.min.css',
            'src/assets/vendors/dropify/css/dropify.min.css',
            'src/assets/vendors/dropzone/dropzone.min.css'
          ]
        },
      },
    },

    // Uglify JS files
    uglify: {
      options: {
        mangle: true,
        //preserveComments: 'some',
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'dist/theme/assets/js/app.min.js': ['dist/theme/assets/js/app.min.js']
        }
      },
      dev: {
        files: {
          'src/assets/js/app.min.js': ['src/assets/js/app.min.js']
        }
      }
    },

    // Do some post processing on CSS files
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')({zindex: false}) // minify the result
        ]
      },
      dist: {
        src: 'dist/*/assets/css/*.min.css'
      },
      dev: {
        src: 'src/assets/css/app.min.css'
      }
    },

  
    // -------------------------------------------------------------------------------
    // END Task configuration
    
  });


  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-file-creator');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');


  // Default task(s).
  grunt.registerTask('dist',
    [
      'sass:dist',
      'sass:dist_minified',
      'clean:before_copy',
      'copy:dist',
      'concat:dist',
      'replace:dist',
      'uglify:dist',
      'postcss:dist',
      'clean:after_copy',
      'copy:source'
    ]
  );

  grunt.registerTask('dev',
    [
      'sass:dev',
      'concat:dev',
      'uglify:dev',
      'postcss:dev',
      'copy:dev',
      'watch'
    ]
  );

};