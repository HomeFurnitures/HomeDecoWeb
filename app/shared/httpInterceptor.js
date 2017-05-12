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

            if (config.url.indexOf('login') > -1) {

            }

           /* var page = constants.restrictedPages[config.method];
            var isRestricted = false;
            angular.forEach(page, function (value) {

            });

            if (isRestricted) {

            }*/


            return config;
        }

        function requestError(config) {

            return config;
        }

        function response(res) {
            return res;
        }

        function responseError(res) {
           /* if (res.status === 401) {
                console.log('401', res);
            }*/
            return res;
        }
    }

})();
