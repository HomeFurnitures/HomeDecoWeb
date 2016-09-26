(function () {
    'use strict';

    angular.module('HomeDeco')
        .factory('HttpInterceptor', HttpInterceptor);

    HttpInterceptor.$inject = ['$rootScope', 'constants'];

    function HttpInterceptor($rootScope, constants) {
        var interceptor = {};
        interceptor.request = request;
        // interceptor.requestError = requestError;
        // interceptor.response = response;
        // interceptor.responseError = responseError;

        return interceptor;


        function request(config) {

            if (!$rootScope.auth) {

                return config
            }

            var page = constants.restrictedPages[config.method];
            var isRestricted = false;
            angular.forEach(page, function (value) {
                if (config.url.indexOf(value) > -1) {
                    isRestricted = true;
                }
            });

            if (isRestricted) {
                angular.forEach($rootScope.auth.header, function (value, key) {
                    config.headers[key] = value;
                });
            }

            console.log('request info', config);
            console.log('restricted', constants.restrictedPages);
            console.log('root', $rootScope);
            return config;
        }

        function requestError(config) {

            return config;
        }

        function response(res) {
            return res;
        }

        function responseError(res) {
            if (res.status === 401) {
                console.log('401', res);
            }
            return res;
        }
    }

})();
