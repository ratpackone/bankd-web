'use strict';

/**
 * @ngdoc overview
 * @name bankdWebApp
 * @description
 * # bankdWebApp
 *
 * Main module of the application.
 */
angular
    .module('bankdWebApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngRoute',
        'LocalStorageModule',
        'ui.bootstrap'
    ])
    .config(['$routeProvider', 'localStorageServiceProvider', '$locationProvider',
        function ($routeProvider, localStorageServiceProvider, $locationProvider) {
            localStorageServiceProvider.setPrefix('bankT');
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                })
                .when('/bankaccount', {
                    templateUrl: 'views/bankaccount.html',
                    controller: 'BankaccountController'
                })
                .when('/connect/:service', {
                    templateUrl: 'views/connect.html',
                    controller: 'ConnectController'
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl',
                })
                .when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'RegisterCtrl',
                })
                .otherwise({
                    redirectTo: '/login'
                });
        }])
    .run((['$http', 'localStorageService', '$rootScope', '$location', function ($http, localStorageService, $rootScope, $location) {
        if (localStorageService.get('AuthToken')) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + localStorageService.get('AuthToken');
        }
        $rootScope.$on('$routeChangeStart', function (event) {
            $http.get('/api/user').then(function () {
                $location.path('/bankaccount');
            }, function () {
                if ($location.url() != "/login" && $location.url() != "/register") {
                    event.preventDefault();
                    $location.path('/login');
                }
            });

        });
    }]));
