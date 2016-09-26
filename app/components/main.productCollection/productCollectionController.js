(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('ProductCollectionController', ProductCollectionController);

    ProductCollectionController.$inject = ['$state', 'ProductCollectionService', 'CartService'];

    function ProductCollectionController($state, ProductCollectionService, CartService) {
        var vm = this;
        vm.products = [];
        vm.openProduct = openProduct;
        vm.addToCart = addToCart;

        ProductCollectionService.getProducts().then(
            function (data) {
                vm.products = data;
            },
            function (error) {
                console.log(error);
            }
        );

        function openProduct(id) {
            $state.go('main.product', {"id": id});
        }

        function addToCart(id) {
            CartService.addProduct(id);
            console.log(CartService.getCart());
        }
    }
})();
