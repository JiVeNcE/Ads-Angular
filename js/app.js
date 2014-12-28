
var angularAds = angular.module('adsModule', ['ngRoute'])
.config(function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html'
        });
        $routeProvider.when('/allAds', {
            templateUrl: 'templates/allAds.html'
        });
        $routeProvider.otherwise({
            redirectTo: 'allAds'
        });
    });