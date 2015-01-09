angularAds.controller('EditUserProfileController', function($scope, $route, $location , userService, notify) {



    $scope.getUserProfile = function() {
        userService.getUserProfile(
            null,
            function success(data) {
                $scope.userProfile = data;
            },
            function error(err) {
                console.log('cannot load user profile' + err);
            }
        )
    };

    $scope.getUserProfile();



    $scope.editUserProfile = function() {
        userService.editUserProfile(
            $scope.userProfile,
            function success() {
                $route.reload();
                notify('User profile successfully updated')
            },
            function error(err) {
                console.log('cannot load user profile' + err);
            }
        )
    };

    $scope.changeUserPassword = function() {
        userService.changeUserPassword(
            $scope.userProfilePassword,
            function success() {
                $route.reload();
                notify('User password successfully updated')
            },
            function error(err) {
                console.log('Cannot change password' + err);
            }
        )
    }


});