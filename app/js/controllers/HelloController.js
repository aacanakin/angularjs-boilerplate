define(['./module'], function(controllers) {

	controllers.controller('HelloController', ['$scope', function($scope) {

		$scope.msg = 'hello world!';

	}]);
});