'use strict';

var BankaccountController = angular.module('bankdWebApp')
    .controller('BankaccountController', ['$scope', '$http', 'localStorageService', '$location', '$uibModal',
        function ($scope, $http, localStorageService, $location, $uibModal) {

            var loadBankaccounts = function () {
                $http.get('/api/bankaccounts').then(function (response) {
                    $scope.bankaccounts = response.data;
                });
            }

            $scope.connect = function (serviceName) {
                $http.get('/api/connects/' + serviceName).then(function (response) {
                    window.location = response.data.redirect_url;
                });
            }

            $scope.editBankaccount = function (bankaccount) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'editBankaccount.html',
                    controller: 'EditBankaccountCtl',
                    size: 'lg',
                    resolve: {
                        bankaccount: bankaccount
                    }
                });

                modalInstance.result.then(function () {
                    loadBankaccounts();
                });
            }

            loadBankaccounts();

        }]);

var EditBankaccountCtl = angular.module('bankdWebApp')
    .controller('EditBankaccountCtl', ['$scope', '$http', '$uibModalInstance', 'bankaccount',
        function ($scope, $http, $uibModalInstance, bankaccount) {

            $scope.bankaccount = bankaccount;

            $http.get('/api/devices').then(function (response) {
                $scope.devices = response.data;
            });

            $scope.ok = function () {
                data = {
                    'amount_warning': $scope.bankaccount.amount_warning,
                    'amount_alarm': $scope.bankaccount.amount_alarm,
                    'device': $scope.bankaccount.device.identifier
                };
                $http.patch('api/bankaccounts/' + $scope.bankaccount.identifier, data).then(function (response) {
                    $uibModalInstance.close();
                });
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }]);
