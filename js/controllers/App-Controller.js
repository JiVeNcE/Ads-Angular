'use strict';

angularAds.controller('AppController',
    function ($scope, authService, $location, notify) {

        $scope.authService = authService;

        $scope.logout = function() {
            authService.logout();
            notify("Logout successful");
            $location.path('/');
        };

        $scope.isAnonymous = function() {
            authService.isAnonymous();
        };

        $scope.isNormalUser = function() {
            authService.isNormalUser();
        }
    }
);
