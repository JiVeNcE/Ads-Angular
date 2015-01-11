'use strict';

angularAds.controller('LoginController', function ($scope, $rootScope, $location, authService, notify) {
        $rootScope.pageTitle = "Login";

        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notify("Welcome " + userData.username);
                    $location.path("/");
                },
                function error(err) {
                    notify("Login Failed");
                    console.log('Login error' + err.error_description)
                }
            );
        };
    }
);
