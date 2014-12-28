/**
 * Created by Zhivko on 28.12.2014 г..
 */

angularAds.factory('mainData', function($http, $log) {
    return {
        getAllAds: function(success) {
            $http({method: 'GET', url: 'http://localhost:1337/api/ads?PageSize=10&StartPage=1'})
                .success(function(data, status, headers, config){
                    success(data)
                })
                .error(function(data, status, headers, config){
                    $log.warn(data);
                })
        },
        getAllTowns: function(success) {
            $http({method: 'GET', url: 'http://localhost:1337/api/towns'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })
        },
        getAllCategories: function(success) {
            $http({method: 'GET', url: 'http://localhost:1337/api/categories'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })
        }
    }
})