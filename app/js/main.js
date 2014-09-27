/**
 * Configure requirejs
 */

require.config({

	paths: {
		'domReady': '../../bower_components/requirejs-domready/domReady',
		'angular': '../../bower_components/angular/angular',
		'angularRoute': '../../bower_components/angular-route/angular-route'
	},
	
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angularRoute': {
			deps: ['angular'],
			'exports': 'angularRoute'
		},
		priority: [
			"angular"
		]
	}

});

/**
 * Boot the application
 */

define([

	'require',
	'angular',
	'app',
	'routes'

], function(require, angular) {

	'use strict';

	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.bootstrap(document, ['app']);
	});

	//angular.bootstrap(document, ['app']);
});
