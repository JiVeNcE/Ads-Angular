'use strict';

angularAds.controller('UserAdController', function ($scope, $location, $rootScope, townsService, categoriesService, userService, $cookieStore) {


        $rootScope.pageTitle = "My Ads";
        $scope.adsRequestParams = {
            startPage: 1,
            pageSize: 2,
            status: null
        };

        $scope.selectAdStatus = function(status) {
            if (status) {
                $scope.adStatus = status;
            } else {
                $scope.adStatus = 'all';
            }
            $scope.adsRequestParams.status = status;
            $scope.adsRequestParams.startPage = 1;
            $scope.getUserAd($scope.adsRequestParams);
        };


        $scope.getUserAd = function() {
            userService.getUserAds(
                $scope.adsRequestParams,
                function success(data) {
                    $scope.userAds = data;
                    $scope.clickedMyAds = true;
                    $scope.numItems = data.numItems;
                },
                function error(err) {
                    console.log('Cannot load user Ads ' + err.error_description);
                }
            )
        };

        $scope.loadEditPage = function(id) {
            $cookieStore.put('adForEdit', id);
            $location.path('/user/ads/edit/' + id);
        };

        $scope.getUserAd();
    }
);
