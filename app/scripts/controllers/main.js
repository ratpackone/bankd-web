'use strict';

/**
 * @ngdoc function
 * @name bankdWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bankdWebApp
 */
 var app = angular.module('bankdWebApp');

 app.controller('MainCtrl', ['$scope', function ($scope) {
 	$scope.test = 'test';
 }]);
