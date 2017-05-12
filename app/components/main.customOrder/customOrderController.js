(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('CustomOrderController', CustomOrderController);

    CustomOrderController.$inject = ['$scope', '$state', 'CustomOrderService', 'CartService'];

    function CustomOrderController($scope, $state, CustomOrderService, CartService) {
        var vm = this;
        vm.order = {};
        vm.loader = true;
        vm.furnitures = [{name: 'sofa', greek: 'καναπές'}];
        vm.sofas = [
            {name: '2_5_seat_sofas'},
            {name: '3_seat_sofas'},
            {name: '4_seat_sofas'},
            {name: '2_4_bed'},
            {name: '4_6_bed'},
            {name: '2_4_corner'},
            {name: '4_6_corner'},
            {name: '6_9_corner'}
        ];
        vm.sofaLegs = [
            {name: 'sl-1'},
            {name: 'sl-2'},
            {name: 'sl-3'},
            {name: 'sl-4'},
            {name: 'sl-5'},
            {name: 'sl-6'},
            {name: 'sl-7'},
            {name: 'sl-8'}
        ];
        vm.fabrics = [
            {fabric: '2'},
            {fabric: '3'},
            {fabric: '4'},
            {fabric: '5'},
            {fabric: '6'},
            {fabric: '22'}
        ];

        vm.selectSofa = selectSofa;
        vm.selectSofaLeg = selectSofaLeg;
        vm.selectFabric = selectFabric;
        vm.selectPillow = selectPillow;
        vm.goToOrder = goToOrder;

        function goToOrder() {
            CartService.setCustom(vm.order);
            $state.go('main.checkout');
        }

        function selectFabric(fabric) {
            vm.order.fabric = fabric;
        }

        function selectPillow(fabric) {
            vm.order.pillow = fabric;
        }

        function selectSofa(sofa) {
            vm.order.sofa = sofa;
        }

        function selectSofaLeg(sofaLeg) {
            vm.order.sofaLeg = sofaLeg;
        }

        $scope.$on('$viewContentLoaded', function() {

            vm.loader = false;
        });
    }
})();
