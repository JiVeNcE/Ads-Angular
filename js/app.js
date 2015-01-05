
var angularAds = angular.module('adsModule', ['ngRoute', 'cgNotify', 'ngResource'])
.config(function ($routeProvider) {
        $routeProvider.when('/login', {
            title: 'Ads-Login',
            templateUrl: 'templates/login.html',
            controller: 'RegistrationController'
        });
        $routeProvider.when('/register', {
            title: 'Ads - Registration',
            templateUrl: 'templates/register.html',
            controller: 'RegistrationController'
        });
        $routeProvider.when('/', {
            title: 'Ads - Home',
            templateUrl: 'templates/allAds.html',
            controller: 'MainController'
        });
        $routeProvider.otherwise({
            title: 'Ads - Home',
            redirectTo: '/'
        });
    }).run(function($location, $rootScope) {
        $rootScope.page = {
            setTitle: function(title) {
                this.title = title;
            }
        };
    })
    .constant('baseUrl', 'http://localhost:1337/api/');
    // .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/')

