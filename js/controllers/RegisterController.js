'use strict';

angularAds.controller('RegisterController',
    function ($scope,  $rootScope, townsService, authService, notify) {

        $rootScope.pageTitle = "Register";
        $scope.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $scope.phonePattern = /([+359]*[\d ])$/;

        $scope.userData = {townId: null};
        $scope.towns = townsService.getTowns();

        $scope.register = function(userRegData) {
            authService.register(userRegData,
                function success() {
                   $scope.authService = userRegData;
                    notify('User account created. Please login.');
                    $location.path('/login');
                },
                function error(err) {
                    console.log(err.error_description)
                }
            );
        };
    }
);
