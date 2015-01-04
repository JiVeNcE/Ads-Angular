angularAds.controller('MainController', function($scope, mainData) {

    $scope.getAds = function(requestParams) {

        mainData.getAllAds(requestParams).then(function(data) {

            $scope.dataAds = data.ads;
        },
        function(err) {
            console.log(err);
        });
    };

    $scope.getAds($scope.adsRequestParams);


});