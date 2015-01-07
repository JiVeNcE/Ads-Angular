'use strict';

angularAds.controller('LoginController',
    function ($scope, $rootScope, $location, authService, notify) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notify("Welcome " + userData.username);
                    $location.path("/");
                },
                function error(err) {
                    notify("Login Faild ");
                    console.log(err.error_description)
                }
            );
        };
    }
);
