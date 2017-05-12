(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = [ '$state', 'RegisterService' ];

    function RegisterController($state, RegisterService) {
        var vm = this;
        vm.register = register;
        vm.loader = false;
        vm.user = {};
        vm.userData = {};

        function register() {
            var data = {
                User: vm.user,
                Userdetail: vm.userData
            };
            console.log(JSON.stringify(data));

            /*vm.loader = true;
            RegisterService.register(JSON.stringify(data)).then(
                function () {
                    $state.go('main.login');
                },
                function (error) {
                    vm.loader = false;
                    console.log(error, error.statusText);
                });*/
        }
    }
})();
