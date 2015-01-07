'use strict';

angularAds.controller('AppController',
    function ($scope, authService) {
        $scope.authService = authService;

        $scope.logout = function() {
            authService.logout();
            $location.path('/');
        };
    }
);
