(function () {
    'use strict';

    angular.module('HomeDeco').config(InitInterceptors)

        .constant('constants', {

            publicUrl: 'http://83.212.101.162/HomeDecoWS/public',
            url: 'http://83.212.101.162',

            tabs: [
                {
                    name: 'Αρχική',
                    state: 'main.home',
                    state2: null
                },
                {
                    name: 'Προϊόντα',
                    state: 'main.productCollection',
                    state2: 'main.product'
                },
                {
                    name: 'Ταμείο',
                    state: 'main.checkout',
                    state2: null
                },
                {
                    name: 'Φτιαξε το δικο σου',
                    state: 'main.customOrder',
                    state2: null
                },
                {
                    name: 'Σχετικά',
                    state: 'main.about',
                    state2: null
                }
            ],

            restrictedPages: {
                GET: ['order', 'user'],
                POST: ['logout', 'order', 'product'],
                PUT: ['product', 'user'],
                DELETE: ['order', 'product', 'user']
            }
        });

    InitInterceptors.$inject = ['$httpProvider'];

    function InitInterceptors($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    }
})();


//http://83.212.101.162/HomeDecoWeb/#/home