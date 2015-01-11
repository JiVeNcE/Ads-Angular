'use strict';

angularAds.controller('UserEditAdController',
    function ($scope, $rootScope, $location, townsService, $cookieStore, categoriesService, $q, userService, notify) {

        $rootScope.pageTitle = "Edit Ad";

        if (!$cookieStore.get('adForEdit')) {
            $location.path('/user/ads');
        } else {
            adForEdit();
        }

        function adForEdit() {
            var id = $cookieStore.get('adForEdit');
            userService.getAdById(
                id,
                function success(data){
                    $scope.adForEdit = data;
                    $scope.imageDataUrl = $scope.adForEdit.imageDataUrl;
                },
                function error(err){
                    console.log('Cannot load Ad for Edit' + err.error_description);
                }
            )
        }

        $scope.editUserAd = function(id, editAdForm) {
            editAdForm = $scope.adForEdit;
            userService.editAd(id, editAdForm,
                function success(data){
                    $scope.adForEdit = data;
                    $location.path('/user/ads');
                    notify("Advertisement edited. Don't forget to submit it for publishing.");
                },
                function error(err){
                    console.log('Cannot edit User Ad' + err.error_description);
                }
            );

        };

        $scope.changeImage = function(img) {
            $scope.adForEdit.imageDataUrl = img;
            $scope.adForEdit.changeimage = true;
            notify("Image is loaded, press the edit button to continue");
        };

        $scope.fileSelected = function(fileInputField) {
            var name = fileInputField.files[0].name;
            console.log(name);
            var file = fileInputField.files[0];
            var element = fileInputField;
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
               notify('Support only images');
                return;
            }
            readFile(file).then(function(values) {
                $scope.imageDataUrl = values;
                $('#filename').text(name);
            }, function(err) {
                alert(err.target.error.message);

            });
        };

        $scope.deleteImage = function() {
            $scope.adForEdit.imageDataUrl = undefined;
            $scope.imageDataUrl = undefined;
            $scope.adForEdit.changeimage = true;
        };

        function readFile(file) {
            var deferred = $q.defer();

            var reader = new FileReader();
            reader.onload = function(e) {
                deferred.resolve(e.target.result);
            };
            reader.onerror = function(e) {
                deferred.reject(e);
            };
            reader.readAsDataURL(file);

            return deferred.promise;
        }
    }
);

