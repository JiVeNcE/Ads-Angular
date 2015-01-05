angularAds.factory('adsData', ['$resource', 'baseUrl', function( $resource, baseUrl) {
    var url = 'http://localhost:1337/api/';
    var resource = $resource(baseUrl + 'ads:adId', {adId: '@id'}, {
        update: { method: 'PUT'}
    });

    function getPublicAds(filterParams) {
        return resource.get(filterParams);
    }

    return {
        getPublicAds: getPublicAds
    }

}])