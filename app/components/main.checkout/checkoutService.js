(function () {
    'use strict';

    angular.module('HomeDeco')
        .service('CheckoutService', CheckoutService);

    CheckoutService.$inject = [ '$http', '$q', 'constants' ];

    function CheckoutService( $http, $q, constants ) {
        var service = {};
        service.checkout = checkout;

        return service;

        function checkout(data) {
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: constants.publicUrl + "/checkout",
                data: data
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