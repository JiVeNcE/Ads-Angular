angularAds.controller('MainController', function($scope, $rootScope, adsData, pageSize) {

    $rootScope.pageTitle = "Home";

    $scope.adsParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };

    $scope.reloadAds = function() {
        adsData.getAds(
            $scope.adsParams,
            function success(data) {
                $scope.ads = data;
            },
            function error(err) {
                console.log("gresgka" + err)
            }
        );
    };


    $scope.reloadAds();

    $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
        $scope.adsParams.categoryId = selectedCategoryId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

    $scope.$on("townSelectionChanged", function(event, selectedTownId) {
        $scope.adsParams.townId = selectedTownId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

});