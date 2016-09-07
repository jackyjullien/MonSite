module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        copy: {
            dist: {
                expand: true,
                cwd: 'src',
                src: 'index.html',
                dest: 'dist/',
            }
        },
        clean: {
            predist: ["dist/*"],
            postdist: [".tmp"]
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '*.js',
                    dest: 'dist/js'
                }]
            }
        },
        useminPrepare: {
            dist: 'src/index.html'
        },
        usemin: {
            dist: 'dist/index.html'
        },
        less: {
            dist: {
                files: {'src/css/app.css': 'src/less/app.less'}
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: [
                    {'src/js/horloge.js':'src/es6/horloge.js'},
                    {'src/js/main.js':'src/es6/main.js'}
                    ]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            dev: {
                expand: true,
                cwd: 'src/css',
                src: '*',
                dest: 'src/css'
            }
        },
        watch: {
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less:dist', 'autoprefixer:dev']
            }
        }
    });

    grunt.registerTask('build', ['clean:predist', 'babel:dist','copy:dist', 'less:dist', 'autoprefixer:dev', 'useminPrepare:dist', 'concat:generated', 'cssmin:generated', 'uglify:generated', 'usemin:dist', 'uglify:dist', 'clean:postdist'])
};