angularAds.controller('CategoriesController', function($scope, mainData) {

     var getCategories = function() {
        mainData.getAllCategories()
            .then(function(resp) {
                $scope.categories = resp;
            },
            function(err) {
                console.log(err);
            });
    };

    getCategories();

});