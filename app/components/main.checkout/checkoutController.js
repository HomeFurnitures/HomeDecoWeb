(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('CheckoutController', CheckoutController);

    CheckoutController.$inject = ['$state', 'CheckoutService', 'CartService'];

    function CheckoutController ($state, CheckoutService, CartService) {
        var vm = this;

        vm.cart = [];
        vm.customOrder = {};
        vm.orderDetails = {};
        vm.isCartEmpty = CartService.getCart() == null;
        vm.emptyTheCart = emptyTheCart;
        vm.removeFromCart = removeFromCart;
        vm.addToCart = addToCart;
        vm.order = order;
        vm.custom = false;
        vm.methods = ["express", "free"];

        if (!vm.isCartEmpty) {
            vm.cart = CartService.getCart();
        }

        if (CartService.getCustom() != null) {
            vm.isCartEmpty = false;
            vm.custom = true;
            vm.customOrder = CartService.getCustom();
        }

        function emptyTheCart() {
            CartService.emptyCart();
            $state.go('main.home');
        }

        function removeFromCart(id) {
            CartService.removeProduct(id);
            $state.reload();
        }

        function addToCart(id, product) {
            CartService.addProduct(id, product);
            $state.reload();
        }

        function order() {
            if (vm.custom) {
                CartService.removeCustom();
                $state.go('main.home');
                alert('Success order');
            }
            else {
                addProductToOrder();
                console.log(JSON.stringify(vm.orderDetails));
                emptyTheCart();
                $state.go('main.home');
                alert('Success order');
            }

        }

        function addProductToOrder() {
            var products = [];
            angular.forEach(vm.cart, function(item) {
               products.push({ProductID: item.id, Quantity: item.quantity})
            });
            vm.orderDetails.Products = products;
        }

    }
})();
