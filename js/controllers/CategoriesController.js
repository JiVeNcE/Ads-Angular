angularAds.controller('CategoriesController', ['$scope', '$rootScope', 'mainData', 'filter', function($scope, $rootScope, mainData, filter) {

     var getCategories = function() {
        mainData.getAllCategories()
            .then(function(resp) {
                $scope.categories = resp;
            },
            function(err) {
                console.log(err);
            });
    };

    $scope.categoryClicked = function categoryClicked(category) {
        filter.filterByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
        if (category) {
            $scope.activeCategory = category.id;
        } else {
            $scope.activeCategory = 'all';
        }
    };

    getCategories();

}]);