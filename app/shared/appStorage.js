(function() {

    'use strict';
    
    angular.module('HomeDeco')
        .factory('Storage', Storage);

    Storage.$inject = ['$exceptionHandler'];

    function Storage( $exceptionHandler ) {
        var Storage = {
            setItem    : setItem,
            getItem    : getItem,
            pushItem   : pushItem,
            removeItem : removeItem
        }

        return Storage;

        /**
         * Adding an object to localStorage
         *
         * @param String name          Value's name
         * @param Object/Array item    The value
         */
        function setItem(name, item) {
            sessionStorage.setItem(name, JSON.stringify(item));            
        }

        /**
         * Getting an item from Storage 
         *
         * @param String name        Value's name
         */
        function getItem(name) {
            var value = sessionStorage.getItem(name);

            //prevent crash when trying to parse json from a string | We need to check if the item is object or not
            try {
                value = JSON.parse(value);
            }
            catch(e) { 
                console.log(e);
            }

            /* return value ? value : null; */
            return value;
        }

        /**
         * Pushing an object into an array of objects in localStorage
         * If the array does not exist, creates it
         *
         * @param String name        The name of the key in storage
         * @param Object item        The object to push
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
         * @param string                Value's name
         */
        function removeItem(name) {
            var value = sessionStorage.getItem(name);

            if (value) {
                sessionStorage.removeItem(name);
            }
        }
    };
})();