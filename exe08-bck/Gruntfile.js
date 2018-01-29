module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'public/js/libs/*.js',
                    'public/js/main.js'
                ],
                dest: 'public/js/core.js'
            }
        },
        uglify: {
            build: {
                src: 'public/js/core.js',
                dest: 'public/js/core.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                },
                files: {
                    'public/css/styles.css': 'public/sass/styles.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['public/sass/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['public/js/**/*.js'],
                tasks: ['concat', 'uglify']
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch'])
}
