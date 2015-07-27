module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['concat:app'],
			},
			css: {
				files: 'src/css/**/*.less',
				tasks: ['less:development']
			},
		},
		uglify: {
			development: {
				options: {
					mangle: false,
				},
				files: {
					'build/compiled.js': ['src/js/**/*.js']
				},
			},
			compressed: {
				options: {
					mangle: true,
					compress: {
						//TODO: Optimize using compressor options (https://github.com/mishoo/UglifyJS2#compressor-options)
					}
				},
				files: {
					'build/compiled.js': ['src/js/**/*.js']
				},
			}
		},
		less: {
			development: {
				files: {
					"build/style.css": "src/css/**/*.less"
				}
			},
			compressed: {
				files: {
					"src/css/**/*.css": "build/style.css"
				},
				compress: true,
			}
		},
		htmlmin: {
			compressed: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
				},
				files: {
					'build/index.html': 'src/*.html'
				}
			}
		},
		compress: {
			main: {
				options: {
					archive: 'build/game.zip',
					mode: 'zip'
				},
				files: [{
					expand: true,
					flatten: true,
					cwd: './',
					src: ['build/*.css', 'build/*.js', 'build/*.html'],
					dest: './'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-compress');


	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['uglify:development', 'less:development']);
	grunt.registerTask('build-compress', ['uglify:compressed', 'less:compressed', 'htmlmin:compressed', 'compress:main']);

};