'use strict';

angularAds.controller('UserAdController',
    function ($scope, $location, $rootScope, townsService, categoriesService, userService, $cookieStore, notify) {


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
                    console.log(data);
                    console.log($scope.adsRequestParams);
                    $scope.userAds = data;
                    $scope.clickedMyAds = true;
                    $scope.numItems = data.numItems;
                },
                function error(err) {
                    console.log('no ads' + err.error_description);
                }
            )
        };

        $scope.deactivateAdStatus = function(id) {
            userService.deactivateAd(
              id,
                function success(data){
                    alert('status deactivate');
                    $scope.getUserAd($scope.adsRequestParams);
                },
                function error(err){
                    console.log('cannot change status' + err.error_description);
                }
            )
        };

        $scope.publishAgainAd = function(id) {
            userService.publishAd(
                id,
                function success(data){
                    alert('add publushed again');
                    $scope.getUserAd($scope.adsRequestParams);
                },
                function error(err){
                    console.log('cannot publush ad' + err.error_description);
                }
            )
        };

        $scope.loadDeletePage = function(id) {
          $cookieStore.put('adForDelete', id);
          $location.path('/user/ads/delete/' + id);
        };

        $scope.loadEditPage = function(id) {
            $cookieStore.put('adForEdit', id);
            $location.path('/user/ads/edit/' + id);
        };

        $scope.getUserAd();
    }
);
