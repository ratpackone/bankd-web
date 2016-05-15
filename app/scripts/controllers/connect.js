'use strict';

angular.module('bankdWebApp')
    .controller('ConnectController', ['$scope', '$routeParams', '$location', '$http',
        function ($scope, $routeParams, $location, $http) {

            var data = {'code': $routeParams.code};

            $http.post('api/connects/' + $routeParams.service, data).then(function () {
                $location.url($location.path());
                $location.path('/bankaccount');
            }, function () {
                $location.url($location.path());
                $location.path('/bankaccount');
            });
        }]);
