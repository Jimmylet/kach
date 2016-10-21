"use strict";

var gulp = require( "gulp" ),
    gESLint = require( "gulp-eslint" ),
    gBabel = require( "gulp-babel" ),
    gUtil = require( "gulp-util" ),
    Mongo = require( "mongodb" ),
    ObjectID = Mongo.ObjectID,
    MongoClient = Mongo.MongoClient;

gulp.task( "lint", function() {
    return gulp
        .src( "src/**/*.js" )
        .pipe( gESLint() )
        .pipe( gESLint.format() );
} );

gulp.task( "build", function() {
    return gulp
        .src( "src/**/*.js" )
        .pipe( gBabel() )
        .pipe( gulp.dest( "bin" ) )
} );

gulp.task( "reset-db", function ( fNext ) {
    if ( process.env.USER !== "vagrant" ){
        gUtil.beep();
        gUtil.log( gUtil.colors.red( "This task must be runned from INSIDE the vagrant box!"));
        return fNext();
    }
    console.log("kikoo");
    // 1. Verify that we are INSIDE the vagrant
    // 2. drop databases
    // 3. parse & fill banks
    // 4. parse & fill terminals
});

gulp.task( "watch", function() {
    gulp.watch( "src/**/*.js", [ "build" ] );
} );

gulp.task( "default", [ "build" ] );

gulp.task( "work", [ "build", "watch" ] );
