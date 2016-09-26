(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
      
    function HomeController () {
        var vm = this;
        vm.greet = 'Welcome to home deco!';
    }
})();