(function () {
    'use strict';

    angular.module('HomeDeco')
        .service('ProductService', ProductService);

    ProductService.$inject = ['$http', '$q', 'constants'];

    function ProductService($http, $q, constants) {
        var productService = {};
        productService.getProductById = getProductById;
        return productService;

        function getProductById(id) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: constants.publicUrl + "/product/" + id,
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


