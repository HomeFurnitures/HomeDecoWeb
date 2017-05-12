(function () {
    'use strict';

    angular.module('HomeDeco')
        .directive("compareTo", compareTo);

    function compareTo() {
        var directive = {};

        directive.require = "ngModel";
        directive.scope = {otherModelValue: "=compareTo"};
        directive.link = link;

        return directive;

        function link(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function (modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function () {
                ngModel.$validate();
            });
        }
    }

})();
