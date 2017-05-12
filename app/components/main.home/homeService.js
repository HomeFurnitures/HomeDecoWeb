(function () {
    'use strict';

    angular.module('HomeDeco')
        .service('HomeService', HomeService);

    HomeService.$inject = [ '$http', '$q', 'constants' ];

    function HomeService( $http, $q, constants ) {
        
    }    
})();

