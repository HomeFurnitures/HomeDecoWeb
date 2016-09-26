(function () {
    'use strict';

    angular.module('HomeDeco')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$q', '$http', 'constants'];

    function LoginService($q, $http, constants) {
        var service = {};
        service.login = login;
 
        return service;

        function login(username, password) {
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: constants.publicUrl + "/login",
                data: {
                    'Username' : username,
                    'Password' : password
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