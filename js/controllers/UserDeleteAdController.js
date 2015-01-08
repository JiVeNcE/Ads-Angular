'use strict';

angularAds.controller('UserDeleteAdController',
    function ($scope, $location, townsService, $cookieStore, categoriesService, userService, notify) {

        if (!$cookieStore.get('adForDelete')) {
            $location.path('/user/ads');
        } else {
            // console.log($cookieStore.get('adForDelete'));
            adForDelete();
        }

        function adForDelete() {
            var id = $cookieStore.get('adForDelete');
            userService.getAdById(
                id,
                function success(data){
                    $scope.adForDelete = data;
                },
                function error(err){
                    console.log('cannot delete' + err.error_description);
                }
            )
        }

        $scope.deleteUserAd = function() {
            var id = $cookieStore.get('adForDelete');
            userService.deleteAd(
                id,
                function success(data){
                    alert('ad deleted');
                    $location.path('/user/ads')
                },
                function error(err){
                    console.log('cannot delete' + err.error_description);
                }
            )
        }


    }
);
