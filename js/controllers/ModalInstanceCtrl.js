angularAds.controller('ModalController', function modalController($scope, $rootScope, $route, $cookieStore, $modalInstance, userService, id, action) {
    $scope.id = id;
    $scope.action = action;

    //if (!$cookieStore.get('adForDelete')) {
    //    $location.path('/user/ads');
    //} else {
    //    // console.log($cookieStore.get('adForDelete'));
    //    adForDelete();
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
                var id = $cookieStore.get('adForDelete');
                userService.getAdById(
                    id,
                    function success(data) {
                        $scope.adForDelete = data;
                    },
                    function error(err) {
                        console.log('cannot delete2' + err.error_description);
                    }
                )
                break;
            case 'Delete':
                userService.deleteAd(id).then(function (data) {
                    $route.reload();
                    $rootScope.$broadcast('alertMessage', data.message);
                }, function (error) {
                    $rootScope.$broadcast('alertMessage');
                });
                break;
            case 'Publish again':
                adsData.publishAgainAd(id).then(function (data) {
                    $route.reload();
                    $rootScope.$broadcast('alertMessage', data.message +
                    "It was moved into your Waiting Approval Ads.");
                }, function (error) {
                    $rootScope.$broadcast('alertMessage');
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