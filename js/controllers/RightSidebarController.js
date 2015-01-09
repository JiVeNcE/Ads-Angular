'use strict';

angularAds.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesService, townsService) {
        $scope.categories = categoriesService.getCategories(
            null,
            function success(data){
                $scope.categories = data;
            },
            function error(err){
                console.log(err)
            }
        );


        $scope.towns = townsService.getTowns(
            null,
            function success(data) {
                $scope.towns = data;
            },
            function error(err) {
                console.log(err);
            }
        );

        $scope.selectedCategoryId = 'all';
        $scope.selectedTownId= 'all';

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
        };

        $scope.townClicked = function(clickedTownId) {
            $scope.selectedTownId = clickedTownId;
        };



        $scope.categoryClicked = function(clickedCategoryId) {

            if (clickedCategoryId) {
                $scope.selectedCategoryId = clickedCategoryId;
            } else {
                $scope.selectedCategoryId = 'all';
            }

            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);


        };

        $scope.townClicked = function(clickedTownId) {
            if (clickedTownId) {
                $scope.selectedTownId = clickedTownId;
            } else {
                $scope.selectedTownId = 'all';
            }
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };

    });


