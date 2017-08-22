module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('compilestyle',['sass'],function(){
        console.log("Compiling the SCSS to CSS");
        grunt.task.run('sass');
        console.log("Done");
    });
    
    grunt.initConfig({
        clean:['app/styles/style.css'],
        sass:{
            dist:{
               files:[{
                   src:['app/styles/Style.scss'],
                   dest:'app/styles/style.css'
               }] 
            }
        },
        watch:{
            css:{
                files:['app/styles/*'],
                tasks:['clean','compilestyle']
            }
        }
    });
    
    
    grunt.registerTask('default',['clean','compilestyle','watch']);
};