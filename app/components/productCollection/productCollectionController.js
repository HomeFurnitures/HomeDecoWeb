(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('ProductCollectionController', ProductCollectionController);

    ProductCollectionController.$inject = [ '$http', '$q', 'ProductCollectionService' ];

    function ProductCollectionController ( $http, $q, ProductCollectionService ) {
        var vm = this;
        vm.products = [];
        vm.singleProduct = {};
        vm.hide = true;
        vm.error = true;
        vm.getProduct = getProduct;

        ProductCollectionService.getProducts().then(
            function (data) {
                //console.log(data);
                vm.products = data;
            },
            function (error) {
                console.log(error.statusText);
            }
        );
        
        function getProduct() {
            ProductCollectionService.getProductById(vm.input).then(
                function (data) {
                    if(data.length) {
                        vm.singleProduct = data[0];
                        vm.hide = false;
                        vm.error = true;
                    }
                    else {
                        vm.hide = true;
                        vm.error = false;
                    }
                },
                function (error) {
                    console.log(error.statusText);
                }
            );
        }
    }
})();
