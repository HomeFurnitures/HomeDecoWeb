(function () {
    'use strict';

    angular.module('HomeDeco')
        .service('ProductCollectionService', ProductCollectionService);

    ProductCollectionService.$inject = [ '$http', '$q', 'hostUrl' ];

    function ProductCollectionService( $http, $q, hostUrl ) {
        var productCollectionService = {};
        productCollectionService.getProducts = getProducts;

        return productCollectionService;

        function getProducts() {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: hostUrl.path + "/product"
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
/*
        function getProductById(id) {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: hostUrl.path + "/product/" + id
            }).then(
                function successCallback(response) {
                    defer.resolve(response.data);
                },
                function errorCallback(response) {
                    defer.reject(response);
                }
            );

            return defer.promise
        }*/
    }
})();


