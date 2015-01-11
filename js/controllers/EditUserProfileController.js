angularAds.controller('EditUserProfileController', function($scope, $rootScope, $route, $location, userService, notify) {

    $rootScope.pageTitle = "Edit User Profile";
    $scope.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $scope.phonePattern = /([+359]*[\d ])$/;

    $scope.getUserProfile = function() {
        userService.getUserProfile(
            null,
            function success(data) {
                $scope.userProfile = data;
            },
            function error(err) {
                console.log('cannot load user profile' + err.error_description);
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
                console.log('cannot edit user profile' + err.error_description);
            }
        );
        $scope.clickedMyAds = true;
    };

    $scope.changeUserPassword = function() {
        userService.changeUserPassword(
            $scope.userProfilePassword,
            function success() {
                $route.reload();
                notify('User password successfully updated')
            },
            function error(err) {
                console.log('Cannot change password' + err.error_description);
            }
        )
    }


});
