(function () {
    'use strict';

    angular.module('HomeDeco')
        .service('HomeService', HomeService);

    HomeService.$inject = [ '$http', '$q', 'hostUrl' ];

    function HomeService( $http, $q, hostUrl ) {
        
    }    
})();

