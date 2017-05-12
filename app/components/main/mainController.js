(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$state', 'constants'];

    function MainController($scope, $state, constants) {
        var vm = this;
        vm.tabs = constants.tabs;
        vm.openTab = openTab;
        vm.goToLogin = goToLogin;
        vm.goToRegister = goToRegister;
        vm.filter = filter;
        vm.onEnterSrch = onEnterSrch;
        $scope.srch = {};


        $scope.$on('$viewContentLoaded', function() {

            vm.activeTab = $state.current.name;
        });

        function onEnterSrch($event) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                filter();
            }
        }

        function filter() {
           if ($state.current.name != 'main.productCollection') {
                $state.go('main.productCollection');
           }
            $scope.srch.name = vm.input;
        }

        function openTab(state) {
            $scope.srch = {};
            $state.go(state);
        }

        function goToLogin() {
            $scope.srch = {};
            $state.go('main.login');
        }

        function goToRegister() {
            $scope.srch = {};
            $state.go('main.register');
        }
    }
})();
