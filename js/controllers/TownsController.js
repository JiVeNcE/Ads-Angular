angularAds.controller('TownsController', ['$scope', '$rootScope', 'mainData', 'filter', function($scope, $rootScope, mainData, filter) {

    var getTowns = function() {
        mainData.getAllTowns()
            .then(function(resp) {
                $scope.towns = resp;
            },
            function(err) {
                console.log(err)
            }
        )
    };

    getTowns();


    $scope.townClicked = function townClicked(town) {
        filter.filterByTown(town);
        $rootScope.$broadcast('townClicked', town);
        if (town) {
            $scope.activeTown = town.id;
        } else {
            $scope.activeTown = 'all';
        }
    };
}]);