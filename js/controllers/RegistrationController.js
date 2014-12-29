/**
 * Created by Zhivko on 29.12.2014 г..
 */

    angularAds.controller('Login', function($scope, $http, $log, $location) {

        $scope.loginError = '';
        $scope.loginData = {
            username: '',
            password: ''
        };
        $scope.registerData = {
            username: '',
            password: '',
            confirmPassword: '',
            name: '',
            email: '',
            phone: ''
        };

        function login (loginData) {
            $http({
                method: 'POST',
                url: 'http://localhost:1337/api/user/Login',
                // headers: {}
                data: {
                    username: loginData.username,
                    password: loginData.password
                }
            })
                .success(function (data, status, headers, config) {
                    $location.path('#/');
                })
                .error(function (data, status, headers, config) {
                    $scope.loginError = data.error_description;
                });
        }

        $scope.login = function (loginData) {
            login(loginData);
        };

        function register (registerData) {
            $http({
                method: 'POST',
                url: 'http://localhost:1337/api/user/Register',
                // headers: {}
                data: {
                    username: registerData.username,
                    password: registerData.password,
                    confirmPassword: registerData.confPassword,
                    name: registerData.regName,
                    email: registerData.regEmail,
                    phone: registerData.phone
                }
            })
                .success(function (data, status, headers, config) {
                    $location.path('#/');
                })
                .error(function (data, status, headers, config) {
                    $scope.loginError = data.error_description;
                });
        }

        $scope.register = function (registerData) {
            register(registerData);
        };

    });