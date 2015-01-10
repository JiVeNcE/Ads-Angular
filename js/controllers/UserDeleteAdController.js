'use strict';

angularAds.controller('UserDeleteAdController',
    function ($scope, $location, townsService, $cookieStore, $modal, categoriesService, userService, notify, $log) {

        //if (!$cookieStore.get('adForDelete')) {
        //    $location.path('/user/ads');
        //} else {
        //     console.log($cookieStore.get('adForDelete'));
        //}
        //
        //function adForDelete() {
        //    var id = $cookieStore.get('adForDelete');
        //    userService.getAdById(
        //        id,
        //        function success(data){
        //            $scope.currentAd = data;
        //            console.log( $scope.currentAd)
        //        },
        //        function error(err){
        //            console.log('cannot delete2' + err.error_description);
        //        }
        //    )
        //}


        $scope.openModal = function(id, action) {
            var modalInstance = $modal.open({
                templateUrl: './templates/user/user-modal.html',
                controller: 'ModalController',
                backdrop: false,
                keyboard: false,
                resolve: {
                    id: function() {
                        return id;
                    },
                    action: function() {
                        return action;
                    }
                }
            });
        };



        //$scope.deleteUserAd = function() {
        //    var id = $cookieStore.get('adForDelete');
        //    userService.deleteAd(
        //        id,
        //        function success(data){
        //            alert('ad deleted');
        //            $location.path('/user/ads')
        //        },
        //        function error(err){
        //            console.log('cannot delete' + err.error_description);
        //        }
        //    )
        //}


    }
);
