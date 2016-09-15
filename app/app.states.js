(function () {
    'use strict';

    angular.module('HomeDeco').config( HomeDeco );

    HomeDeco.$inject = [ '$stateProvider', '$urlRouterProvider' ];

    function HomeDeco($stateProvider, $urlRouterProvider) {

        // Any unknown URLS go to index
        $urlRouterProvider.otherwise('/home');

        // No route goes to index
        $urlRouterProvider.when('', '/home');

        // Use a state provider for routing
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                views: {
                    '@': {
                        templateUrl: 'app/shared/appView.html',
                        controller: 'AppController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('app.home', {
                url: '/home',
                templateUrl: 'app/components/home/homeView.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })

            .state('app.productCollection', {
                url: '/products',
                templateUrl: 'app/components/productCollection/productCollectionView.html',
                controller: 'ProductCollectionController',
                controllerAs: 'vm'
            })

            .state('app.product', {
                url: '/product/:id',
                templateUrl: 'app/components/product/productView.html',
                controller: 'ProductController',
                controllerAs: 'vm'
            })

            .state('app.about', {
                url: '/about',
                templateUrl: 'app/components/about/aboutView.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            });
    }
})();