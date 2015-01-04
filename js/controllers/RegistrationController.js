angularAds.controller('RegistrationController', function($scope, $http, $window, Auth) {


        $scope.login = loginUser;
        $scope.userData = Auth;

      function loginUser() {
          var user = {
              username: $scope.username,
              passwords: $scope.password
          };

          Auth.login(user)
              .then(
              function(userLoginData) {
                  Auth.setLoggedUser(userLoginData);
                  Auth.getAuthorizationHeaders();
                  $window.location.href = '#/user/home';
                  //   messaging.successMessage("Welcome " + userLoginData.username);
              },
              function(err) {
                //  messaging.errorMessage(err.error_description);
                  console.log(err.error_description)
              }
          );
      }

    });