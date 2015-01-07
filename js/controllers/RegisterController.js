'use strict';

angularAds.controller('RegisterController',
    function ($scope, $rootScope, $location, townsService, authService) {

        $rootScope.pageTitle = "Register";

        $scope.userData = {townId: null};
        $scope.towns = townsService.getTowns();

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                   $scope.authService = userData;
                },
                function error(err) {
                    console.log(err.error_description)
                }
            );
        };
    }
);
