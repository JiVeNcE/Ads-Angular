
var angularAds = angular.module('adsModule', ['ngRoute', 'cgNotify', 'ngResource', 'ui.bootstrap.pagination', 'angular-loading-bar', 'ngCookies']);

angularAds.config(function ($routeProvider) {
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
        $routeProvider.when('/user/home', {
            templateUrl: 'templates/user/user-home.html',
            controller: 'AppController'
        });
        $routeProvider.when('/user/ads', {
            templateUrl: 'templates/user/user-ads.html',
            controller: 'UserAdController'
        });
        $routeProvider.when('/user/ads/publish', {
            templateUrl: 'templates/user/publish-new-ad.html',
            controller: 'UserPublishNewAdController'
        });
        $routeProvider.when('/user/ads/delete/:id', {
            templateUrl: 'templates/user/delete-ad.html',
            controller: 'UserDeleteAdController'
        });
        $routeProvider.when('/user/ads/edit/:id', {
            templateUrl: 'templates/user/edit-ad.html',
            controller: 'UserEditAdController'
        });
        $routeProvider.when('/user/profile', {
            templateUrl: 'templates/user/edit-profile.html'

        });
        $routeProvider.when('/unauthorized', {
            templateUrl: 'templates/unauthorized.html'
        });
        //$routeProvider.otherwise(
        //    { redirectTo: '/' }
        //);


    })
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/')
    .constant('pageSize', 7)
    .run(function ($rootScope, $location, authService) {
        $rootScope.$on('$locationChangeStart', function (event) {
           var path =  $location.path();
            if ( !authService.isLoggedIn() && path !== '/login' && path !== '/register' && path !== '/')  {
                $location.path('/unauthorized');
            }

        });
    });

// .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/')

