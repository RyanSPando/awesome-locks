(function() {

  'use strict';

  angular
    .module('alApp.components.cart')
    .directive('alCart', cartDirective);

  function cartDirective() {
    /*jshint validthis: true */
    return {
      restrict: 'E',
      bindToController: true,
      controller: Controller,
      controllerAs: 'cartCtrl',
      link: link,
      templateUrl: 'js/components/cart/view.cart.html'
    };
  }

  function link(scope, elem, attr, ctrl) {

  }

  Controller.$inject = ['$scope', '$location'];
  function Controller($scope, $location) {
    const vm = this;
  }
})();
