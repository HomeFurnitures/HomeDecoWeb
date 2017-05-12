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
        cart.setCustom = setCustom;
        cart.getCustom = getCustom;
        cart.removeCustom = removeCustom;
        return cart;

        function setCustom(data) {
            Storage.setItem('custom', data);
        }

        function getCustom() {
            return  Storage.getItem('custom');
        }

        function removeCustom() {
            Storage.removeItem('custom');
        }

        function addProduct(id, data) {
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
                product.data = data;
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
            if (cart.length < 1) {
                emptyCart();
            }
            else {
                Storage.setItem('cart', cart);
            }
        }

        function emptyCart() {
            Storage.removeItem('cart');
        }
    }
})();


