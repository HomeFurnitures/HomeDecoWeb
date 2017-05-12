(function () {
    'use strict';

    angular.module('HomeDeco')
        .factory('RegisterService', RegisterService);

    RegisterService.$inject = ['$q', '$http', 'constants'];

    function RegisterService($q, $http, constants) {
        var service = {};
        service.register = register;

        return service;

        function register(data) {
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: constants.publicUrl + "/register",
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