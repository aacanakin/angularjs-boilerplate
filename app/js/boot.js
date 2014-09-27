/**
 * Boot the application
 */

define([

	'require',
	'angular',
	'app',
	'routes'

], function(require, angular) {

	console.log("bootstrapping app");

	'use strict';		

	angular.bootstrap(document, ['app']);

});
