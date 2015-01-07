'use strict';

angularAds.factory('adsData', function( $resource, baseUrl) {
    var url = 'http://localhost:1337/api/';

    var adsResource = $resource(
        baseUrl + 'ads',
        null,
        {
            'getAll': { method: 'GET'}
        }
    );

    return {
        getAds: function (params, success, error) {
            return adsResource.getAll(params, success, error);
        }
    }

})

angularAds.factory('townsService',
    function ($resource, baseUrl) {
        var townResource = $resource(
            baseUrl + 'towns'
        );

        return {
            getTowns: function(success, error) {
                return townResource.query(success, error);
            }
        }
    }
);

angularAds.factory('categoriesService',
    function ($resource, baseUrl) {
        var categoriesResource = $resource(
            baseUrl + 'categories'
        );

        return {
            getCategories: function(success, error) {
                return categoriesResource.query(success, error);
            }
        }
    }
);
