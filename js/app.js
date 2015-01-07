
var angularAds = angular.module('adsModule', ['ngRoute', 'cgNotify', 'ngResource', 'ui.bootstrap.pagination', 'angular-loading-bar'])
.config(function ($routeProvider) {
        $routeProvider.when('/login', {
            title: 'Ads-Login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/register', {
            title: 'Ads - Registration',
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        });
        $routeProvider.when('/', {
            title: 'Ads - Home',
            templateUrl: 'templates/Home.html',
            controller: 'MainController'
        });
        $routeProvider.otherwise({
            title: 'Ads - Home',
            redirectTo: '/'
        });
    })
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/')
    .constant('pageSize', 7);
    // .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/')

