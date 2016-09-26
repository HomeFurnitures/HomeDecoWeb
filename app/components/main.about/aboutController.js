(function () {
    'use strict';

    angular.module('HomeDeco')
        .controller('AboutController', AboutController);

   AboutController.$inject = [];
      
    function AboutController () {
        var vm = this;        
		vm.about = 'agular main.home deco';		
    }
})();