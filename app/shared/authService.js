(function () {
    'use strict';

    angular.module('HomeDeco')
        .service('AuthService', AuthService);

    CartService.$inject = ['$http', '$rootScope'];

    function AuthService($http, $rootScope) {
        var authentication = {};
        authentication.setCredentials = setCredentials;
        authentication.clearCredentials = clearCredentials;

        function setCredentials(user, header) {

            $rootScope.auth = {
                currentUser: user,
                header: header
            };

            //$cookies.put('auth', $rootScope.auth);
        }

        function clearCredentials() {
            $rootScope.auth = {};
            //$cookies.remove('auth');

            $http({
                method: 'POST',
                url: constants.publicUrl + "/logout"
            }).then(
                function successCallback(response) {
                    console.log(response);
                },
                function errorCallback(response) {
                    console.log(response);
                }
            );
        }
    }
})();