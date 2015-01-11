angularAds.controller('ModalController', function modalController($scope, $rootScope, $route, $cookieStore, $modalInstance, userService, id, action, notify) {
    $scope.id = id;
    $scope.action = action;

    /* get selected ad */
    userService.getAdById(
        id,
        function success(data) {
            $scope.currentAd = data;
        }, function error (err) {
           console.log('Cannot get ad by Id' + err.error_description)
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
                        notify('Advertisement deleted')
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
                }, function error (err) {
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