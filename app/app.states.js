(function () {
    'use strict';

    angular.module('HomeDeco').config(InitStates);

    InitStates.$inject = ['$stateProvider', '$urlRouterProvider'];

    function InitStates($stateProvider, $urlRouterProvider) {

        // Any unknown URLS go to index
        $urlRouterProvider.otherwise('/home');

        // No route goes to index
        $urlRouterProvider.when('', '/home');

        // Use a state provider for routing
        $stateProvider
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

            .state('main.checkout', {
                url: '/checkout',
                templateUrl: 'app/components/main.checkout/checkoutView.html',
                controller: 'CheckoutController',
                controllerAs: 'vm'
            })

            .state('main.customOrder', {
                url: '/custom-order',
                templateUrl: 'app/components/main.customOrder/customOrderView.html',
                controller: 'CustomOrderController',
                controllerAs: 'vm'
            })

            .state('main.login', {
                url: '/login',
                templateUrl: 'app/components/main.login/loginView.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })

            .state('main.register', {
                url: '/register',
                templateUrl: 'app/components/main.register/registerView.html',
                controller: 'RegisterController',
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