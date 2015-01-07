'use strict';

angularAds.controller('RegisterController',
    function ($scope, $location, townsService, authService) {


        $scope.userData = {townId: null};
        $scope.towns = townsService.getTowns();

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    // TODO: display success message
                    // TODO: redirect to login screen
                },
                function error(err) {
                    console.log(err.error_description)
                }
            );
        };
    }
);
