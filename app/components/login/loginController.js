(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];

    function LoginController(LoginService) {
        var vm = this;
        vm.login = function() {
            LoginService.login(vm.username, vm.password).then(
                function (data) {
                    LoginService.setCredentials('andreas', data);
                },
                function (error) {
                    console.log(error.statusText);
                });
        }
    }
})();