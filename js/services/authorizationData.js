'use strict';

angularAds.factory('authService',
    function ($http, baseUrl) {
        return {
            login: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseUrl + 'user/login',
                    data: userData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            register: function(userRegData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseUrl + 'user/register',
                    data: userRegData
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            },

            logout: function() {
                delete sessionStorage['currentUser'];
            },

            getCurrentUser : function() {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
            },

            isAnonymous : function() {
                return sessionStorage['currentUser'] == undefined;
            },

            isLoggedIn : function() {
                var currentUser = this.getCurrentUser();
                return !!currentUser;
            },

            isNormalUser : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (!currentUser.isAdmin);
            },

            isAdmin : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (currentUser.isAdmin);
            },

            getAuthHeaders : function() {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            }
        }
    }
);
