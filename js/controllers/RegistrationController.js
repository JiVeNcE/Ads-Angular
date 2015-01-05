angularAds.controller('RegistrationController', function($scope, $http, $window, Auth, notify) {

        $scope.register = registerUser;
        $scope.login = loginUser;
        $scope.userData = Auth;
        $scope.logout = logout;

      function loginUser() {
          var user = {
              username: $scope.username,
              password: $scope.password
          };

          Auth.login(user)
              .then(
              function(userLoginData) {
                  Auth.setLoggedUser(userLoginData);
                  Auth.getAuthorizationHeaders();
                  $window.location.href = '#/user/home';
                  //   messaging.successMessage("Welcome " + userLoginData.username);
                  notify("Welcome " + userLoginData.username)
              },
              function(err) {
                //  messaging.errorMessage(err.error_description);
                  console.log(err.error_description)
              }
          );
      }

    function registerUser() {
        Auth.register($scope.registerData)
            .then(
                function(userRegisterData) {
                    Auth.setLoggedUser(userRegisterData);
                    Auth.getAuthorizationHeaders();
                },
                function(err) {
                    var error = err.modelState[''];
                    for (var e in error) {
                        var errorResultString = checkRegisterUserForErrors(error[e]);
                        messaging.errorMessage(errorResultString);
                        console.log(errorResultString);
                    }
                }
        )
    }

    function logout() {
        var headers = Auth.getAuthorizationHeaders();
        Auth.logout(headers).
            then(
                function(data) {
                    Auth.removeAuthorizationHeaders();
                    Auth.setLoggedUser(undefined);
                   // messaging.successMessage(data.message);
                    notify(data.message);
                    $window.location.href = '#/';
                },
                function(err) {
               //     messaging.errorMessage(err.message);
                    console.log(err);
        });
    }

    });