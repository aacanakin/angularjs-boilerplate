define([

	'angular',
	'angular-route',
	'./controllers/index',
	'./directives/index',
	'./filters/index',
	'./services/index'

], function(angular) {

	console.log("creating app module");

	'use strict';

	return angular.module('app', [

		'ngRoute',
		'app.controllers',
		'app.services',
		'app.directives',
		'app.services'

	]);
});
