'use strict';

/**
 * @ngdoc function
 * @name bankdWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bankdWebApp
 */
 var app = angular.module('bankdWebApp');
 
 app.controller('LoginCtrl', ['$scope', function($scope) {
 	
 	$scope.logIn = function(email, password) {
 		
 	};

 }]);

app.factory('SessionService', ['$http', '$q', function($http, $q){
	return {
		signup: function(email, password) {

		},
		login: function(email, password) {

		},
		logout: function() {

		}
	}
}]);