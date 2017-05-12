(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('LoginController', LoginController);

    LoginController.$inject = [ '$rootScope', '$state', 'LoginService' ];

    function LoginController($rootScope, $state, LoginService) {
        var vm = this;
        vm.login = login;
        vm.loader = false;
            
        function login() {
            vm.loader = true;
            LoginService.login(vm.username, vm.password).then(
                function () {
                    $rootScope.auth = true;
                    $state.go('main.home');
                },
                function (error) {
                    vm.loader = false;
                    console.log(error, error.statusText);
                });
        }
    }
})();