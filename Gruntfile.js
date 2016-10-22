
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: getHtmlmin(this.pkg)
    });

    function getUglify(pkg){

        return {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/index.html',
                public: 'public/index.min.html'
            }
        }
    }

    function getHtmlmin(pkg){

        var files = {
            '<%= pkg.dist %>/*.html': '<%= pkg.src %>/*.html'
        }

        console.log(files)

        return {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: files
            },
            dev: {
                files: files
            }
        }
    }

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('build', ['htmlmin:dev']);

    grunt.registerTask('dist', ['htmlmin:dist']);

};
