'use strict';

angularAds.controller('UserDeleteAdController', function ($scope, $location, townsService, $cookieStore, $modal) {

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
});
