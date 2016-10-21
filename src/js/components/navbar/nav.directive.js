(function() {

  'use strict';

  angular
    .module('alApp.components.nav')
    .directive('alNav', navDirective);

  navDirective.$inject = ['$scope', '$location', ''];

  function navDirective($scope) {
    /*jshint validthis: true */
    return {
      restrict: 'E',
      controller: function() {

      },
      link: function(scope, elem, attr, ctrl) {

      }

    };

  }

})();
