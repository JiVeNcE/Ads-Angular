angularAds.controller('ModalController', function modalController($scope, $rootScope, $route, $cookieStore, $modalInstance, userService, id, action, notify) {
    $scope.id = id;
    $scope.action = action;

    //if (!$cookieStore.get('adForDelete')) {
    //    $location.path('/user/ads');
    //} else {
    //    console.log($cookieStore.get('adForDelete'));
    //   // adForDelete();
    //}


    /* get selected ad */
    userService.getAdById(
        id,
        function (data) {
            $scope.currentAd = data;
        }, function (error) {
            alert('greshka')
        });

    /* confirm CRUD operation on ad */
    $scope.ok = function () {
        $modalInstance.close();
        /* perform CRUD opration on ad depending on  requested action and id sent by the
         $modal reslove functions */
        switch (action) {
            case 'Deactivate':
                userService.deactivateAd(
                    id,
                    function success (data) {
                        $route.reload();
                        notify('Ad Deactivate Successful')
                    },
                    function error (err) {
                        console.log('Cannot Deactivate this ad' + err.error_description)
                    });
                break;
            case 'Delete':
                userService.deleteAd(
                    id,
                    function success (data) {
                        $route.reload();
                        notify('Ad Deleted Successful')
                    },
                    function error (err) {
                        console.log('Cannot Delete ad' + err.error_description)
                    });
                break;
            case 'Publish again':
                userService.publishAd(
                    id,
                    function success (data) {
                    $route.reload();
                    notify('Ad published Successful');
                }, function (error) {
                        console.log('Cannot Publish ad' + err.error_description)
                });
                break;
            default:
                break;
        }
    };

    /* close modal dialog */
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    });