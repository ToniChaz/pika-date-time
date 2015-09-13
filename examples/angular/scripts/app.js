'use strict';

angular.module('piDaTi', [
	'ngRoute'
]).
config(['$routeProvider',
	function($routeProvider) {	
	
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	})
	.otherwise({
		redirectTo: '/home'
	});
	
}]);