/**
 * Definition of routes should reside here
 */

define(['./app'], function(app) {

	'use strict';

	return app.config(['$routeProvider',
		function($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'app/views/hello.html',
					controller: 'HelloController'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);
});
