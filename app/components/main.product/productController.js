(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$stateParams', 'ProductService', '$state'];

    function ProductController($stateParams, ProductService, $state) {
        var vm = this;
        vm.product = {};

        ProductService.getProductById($stateParams.id).then(
            function (data) {
                vm.product = data[0];
            },
            function (error) {
                console.log(error);
                $state.go('main.home');
            }
        );
    }
})();
