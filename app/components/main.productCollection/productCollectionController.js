(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('ProductCollectionController', ProductCollectionController);

    ProductCollectionController.$inject = ['$scope', '$state', 'ProductCollectionService', 'CartService'];

    function ProductCollectionController($scope, $state, ProductCollectionService, CartService) {
        var vm = this;
        vm.products = [];
        vm.openProduct = openProduct;
        vm.addToCart = addToCart;
        vm.loader = true;

        ProductCollectionService.getProducts().then(
            function (data) {
                vm.products = data;
                vm.loader = false;
            },
            function (error) {
                console.log(error);
            }
        );

        function openProduct(id) {
            $state.go('main.product', {"id": id});
        }

        function addToCart(id, product) {
            CartService.addProduct(id, product);
        }
    }
})();
