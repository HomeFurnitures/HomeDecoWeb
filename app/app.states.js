(function () {
    'use strict';

    angular.module('HomeDeco').config(InitStates);

    InitStates.$inject = ['$stateProvider', '$urlRouterProvider'];

    function InitStates($stateProvider, $urlRouterProvider) {

        // Any unknown URLS go to index
        $urlRouterProvider.otherwise('/');

        // No route goes to index
        $urlRouterProvider.when('', '/');

        // Use a state provider for routing
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/loginView.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            
            .state('main', {
                url: '',
                abstract: true,
                views: {
                    '@': {
                        templateUrl: 'app/components/main/mainView.html',
                        controller: 'MainController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('main.home', {
                url: '/home',
                templateUrl: 'app/components/main.home/homeView.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })

            .state('main.productCollection', {
                url: '/products',
                tab: 'products',
                templateUrl: 'app/components/main.productCollection/productCollectionView.html',
                controller: 'ProductCollectionController',
                controllerAs: 'vm'
            })

            .state('main.product', {
                url: '/product/:id',
                templateUrl: 'app/components/main.product/productView.html',
                controller: 'ProductController',
                controllerAs: 'vm'
            })

            .state('main.about', {
                url: '/about',
                templateUrl: 'app/components/main.about/aboutView.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            });
    }
})();