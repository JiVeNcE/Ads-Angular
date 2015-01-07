angularAds.controller('MainController', function($scope, adsData, pageSize) {

    $scope.adsParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };

    $scope.reloadAds = function() {
        adsData.getAds(
            $scope.adsParams,
            function success(data) {
                $scope.ads = data;

                console.log($scope.adsParams.startPage)
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

    //$scope.$on('categoryClicked', function(event, category) {
    //    loadPublicAds(filter.getParams());
    //});
    //
    //$scope.$on('townClicked', function(event, category) {
    //    loadPublicAds(filter.getParams());
    //})

});