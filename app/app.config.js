(function () {
    'use strict';

    angular
        .module('HomeDeco', [
            'ui.router'
        ])

        /* Define service path */
        .constant('hostUrl', {
            path: 'http://83.212.107.169/HomeDecoWS/public',
            basePath: 'http://83.212.107.169'
        })

        .config(function () {
            //
        });
})();