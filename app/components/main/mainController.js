(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('MainController', MainController);

    MainController.$inject = ['$state', 'constants'];

    function MainController($state, constants) {
        var vm = this;
        vm.tabs = constants.tabs;
        vm.activeTab = $state.current.name;
        vm.openTab = openTab;

        function openTab(state) {
            $state.go(state);
            vm.activeTab = state;
        }
    }
})();
