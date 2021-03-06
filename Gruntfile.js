module.exports = function(grunt) {

  	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {                  
			dist: {                   
				options: {              
					sassDir: 'src/styles',
					cssDir: 'build',
					environment: 'production'
				}
			}
		},
		responsive_images: {
		makeResponsive: {
		  options: {
		    sizes: [{
              name: '320w',
		      width: 320
		    },{
		      name: '480w',
		      width: 480
		    },{
		      name: '800w',
              width: 800
		    },{
              name: '1200w',
              width: 1200
            }]
		  },
		  files: [{
		    expand: true,
		    src: ['assets/**.{jpg,png,gif}'],
            dest: 'build'
		  }]
		}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.loadNpmTasks('grunt-responsive-images');

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['compass','responsive_images']);

};

