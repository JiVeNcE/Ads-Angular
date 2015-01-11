angularAds.controller('MainController', function($scope, $rootScope, adsData, pageSize) {

    $rootScope.pageTitle = "Home";
    $scope.loading = true;

    $scope.adsParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };

    $scope.reloadAds = function() {
        adsData.getAds(
            $scope.adsParams,
            function success(data) {
                $scope.ads = data;
                $scope.numPages = data.numPages;
                window.scrollTo(0, 0);
                $scope.loading = false;
            },
            function error(err) {
                console.log("Cannot load ads" + err.error_description)
            }
        );
    };

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

    $scope.reloadAds();

});