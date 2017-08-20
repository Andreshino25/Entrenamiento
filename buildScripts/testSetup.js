//This file isn`t transpiled, so muest use CommonJS and ES5

//Register babel to transpile before our test run.
require('babel-register')();

//Disable webpack feactures that mocha doesn´t understand.
require.extensions['.css'] = function() {};
