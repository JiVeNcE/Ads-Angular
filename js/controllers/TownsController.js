angularAds.controller('TownsController', function($scope, mainData) {

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

    getTowns()
});