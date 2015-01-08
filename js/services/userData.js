'use strict';

angularAds.factory('userService',
    function ($http, baseUrl, authService) {
        return {
            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseUrl + 'user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseUrl + 'user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getAdById: function (id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseUrl + 'user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deactivateAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseUrl + 'user/ads/deactivate/' + id,
                    headers: authService.getAuthHeaders()

                };
                $http(request).success(success).error(error);
            },

            publishAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseUrl + 'user/ads/publishagain/' + id,
                    headers: authService.getAuthHeaders()

                };
                $http(request).success(success).error(error);
            },

            deleteAd: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseUrl + 'user/ads/' + id,
                    headers: authService.getAuthHeaders()

                };
                $http(request).success(success).error(error);
            },

            editAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseUrl + 'user/ads/' + id,
                    headers: authService.getAuthHeaders()

                };
                $http(request).success(success).error(error);
            }
        }
    }
);
