'use strict';

angularAds.controller('UserAdController',
    function ($scope, $location, townsService, categoriesService, userService, $cookieStore, notify) {


        $scope.adsRequestParams = {
            startPage: 1,
            pageSize: 2,
            status: null
        };

        $scope.getUserAd = function() {
            userService.getUserAds(
                $scope.adsRequestParams,
                function success(data) {
                    $scope.userAds = data;
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

        $scope.getUserAd();
    }
);
