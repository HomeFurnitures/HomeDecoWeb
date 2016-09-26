(function () {
    'use strict';

    angular.module('HomeDeco', [
        'ui.router'
    ])

    .config(Configuration);

    Configuration.$inject = ['$httpProvider'];
    
    function Configuration($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    }
})();