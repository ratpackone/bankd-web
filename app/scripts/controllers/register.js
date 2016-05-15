
/**
 * @ngdoc function
 * @name bankdWebApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the bankdWebApp
 */
angular.module('bankdWebApp')
    .controller('RegisterCtrl', ['$scope', '$http', 'localStorageService', '$location',
        function ($scope, $http, localStorageService, $location) {

            var registerSuccess = function (response) {
                localStorageService.set('AuthToken', response.data.token);
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
                $location.path('/bankaccount');
            }

            var registerError = function (response) {
                $scope.registerError = 'E-mail already registrated?';
            }

            $scope.register = function (data) {
                data = {'username': data.username, 'password': data.password};
                $http.post('/api/users', data).then(registerSuccess, registerError);
            }
        }]);
