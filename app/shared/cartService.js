(function () {
    'use strict';

    angular.module('HomeDeco')
        .service('CartService', CartService);

    CartService.$inject = ['Storage'];

    function CartService(Storage) {
        var cart = {};
        cart.addProduct = addProduct;
        cart.removeProduct = removeProduct;
        cart.getCart = getCart;
        cart.emptyCart = emptyCart;
        return cart;

        function addProduct(id) {
            var product = {};
            var cart = Storage.getItem('cart');
            var itemInCart = false;
            angular.forEach(cart, function(item) {
                if (item.id == id) {
                    item.quantity++;
                    itemInCart = true;
                }
            });

            if (!itemInCart) {
                product.id = id;
                product.quantity = 1;
                Storage.pushItem('cart', product);
            }
            else {
                Storage.setItem('cart', cart);
            }
        }

        function getCart() {
            return Storage.getItem('cart');
        }

        function removeProduct(id) {
            var cart = Storage.getItem('cart');
            angular.forEach(cart, function(item) {
                if (item.id == id) {
                    if (item.quantity > 1) {
                        item.quantity--;
                    }
                    else {
                        cart.splice(cart.indexOf(item), 1);
                    }
                }
            });

            Storage.setItem('cart', cart);
        }

        function emptyCart() {
            Storage.removeItem('cart');
        }
    }
})();


