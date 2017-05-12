(function () {

    'use strict';

    angular.module('HomeDeco')
        .factory('Storage', Storage);

    Storage.$inject = ['$exceptionHandler'];

    function Storage($exceptionHandler) {
        var storage = {};
        storage.setItem = setItem;
        storage.getItem = getItem;
        storage.pushItem = pushItem;
        storage.removeItem = removeItem;
        return storage;

        /**
         * Adding an object to Storage
         *
         * @param name String
         * @param item Object
         */
        function setItem(name, item) {
            sessionStorage.setItem(name, JSON.stringify(item));
        }

        /**
         * Getting an item from Storage
         *
         * @param name String
         */
        function getItem(name) {
            var value = sessionStorage.getItem(name);

            try {
                value = JSON.parse(value);
            }
            catch (e) {
                console.log(e);
            }

            /* return value ? value : null; */
            return value;
        }

        /**
         * Pushing an object into an array of objects in localStorage
         * If the array does not exist, creates it
         *
         * @param name String
         * @param item Object
         */
        function pushItem(name, item) {
            // Parse the serialized data back into an aray of objects
            var array = JSON.parse(sessionStorage.getItem(name));

            if (!array) {
                array = [];
            }

            array.push(item);

            // Re-serialize the array back into a string and store it in localStorage
            sessionStorage.setItem(name, JSON.stringify(array));
        }

        /**
         * Removing a value from sessionStorage
         *
         * @param name String
         */
        function removeItem(name) {
            var value = sessionStorage.getItem(name);

            if (value) {
                sessionStorage.removeItem(name);
            }
        }
    }
})();