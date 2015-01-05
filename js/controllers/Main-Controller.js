angularAds.controller('MainController', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {

    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getPublicAds(filterParams)
            .$promise
            .then(function(data) {
                $scope.adsData = data;
            })
    }

    loadPublicAds();

    $scope.$on('categoryClicked', function(event, category) {
        loadPublicAds(filter.getFilterParams());
    });

    $scope.$on('townClicked', function(event, category) {
        loadPublicAds(filter.getFilterParams());
    })




}]);