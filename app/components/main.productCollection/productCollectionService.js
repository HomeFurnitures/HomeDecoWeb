(function () {
    'use strict';

    angular.module('HomeDeco')
        .service('ProductCollectionService', ProductCollectionService);

    ProductCollectionService.$inject = [ '$http', '$q', 'constants' ];

    function ProductCollectionService( $http, $q, constants ) {
        var productCollectionService = {};
        productCollectionService.getProducts = getProducts;

        return productCollectionService;

        function getProducts() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: constants.publicUrl + "/product",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(
                function successCallback(response) {
                    defer.resolve(response.data);
                },
                function errorCallback(response) {
                    defer.reject(response);
                }
            );

            return defer.promise
        }
    }
})();


