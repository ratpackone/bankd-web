'use strict';

/**
 * @ngdoc function
 * @name bankdWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bankdWebApp
 */

angular.module('bankdWebApp')
    .controller('LoginCtrl', ['$scope', '$http', 'localStorageService', '$location',
        function ($scope, $http, localStorageService, $location) {

            var loginSuccess = function (response) {
                localStorageService.set('AuthToken', response.data.token);
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
                $location.path('/bankaccount');
            }

            var loginError = function (response) {
                $scope.loginError = 'Invalid Credentials?';
            }

            $scope.login = function (data) {
                data = {'username': data.username, 'password': data.password};
                $http.post('/api/login_check', data).then(loginSuccess, loginError);
            }

        }]);
