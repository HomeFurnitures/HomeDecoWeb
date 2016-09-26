(function () {
    'use strict';

    angular.module('HomeDeco', [
            'ui.router'
        ])

        .config(InitInterceptors)
        
        .constant('constants', {
            
            publicUrl: 'http://83.212.107.169/HomeDecoWS/public',
            url: 'http://83.212.107.169',
            
            tabs:[
                {
                    name: 'home',
                    state: 'main.home'
                },
                {
                    name: 'products',
                    state: 'main.productCollection'
                },
                {
                    name: 'about',
                    state: 'main.about'
                }
            ],
            
            restrictedPages: {
                GET:['order', 'user'],
                POST:['logout', 'order', 'product'],
                PUT:['product', 'user'],
                DELETE:['order', 'product', 'user']
            }
        });

    InitInterceptors.$inject = ['$httpProvider'];
    function InitInterceptors($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    }
})();