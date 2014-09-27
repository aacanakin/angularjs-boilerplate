define([

	'angular',
	'angularRoute',
	'./controllers/index',
	'./directives/index',
	'./filters/index',
	'./services/index'

], function(angular) {

	'use strict';

	return angular.module('app', [

		'ngRoute',
		'app.controllers',
		'app.services',
		'app.directives',
		'app.services'

	]);
});
