(function() {

  'use strict';

  angular
    .module('alApp.components.products')
    .directive('alProducts', productsDirective)
    .filter('yes', yes);

  function productsDirective() {
    /*jshint validthis: true */
    return {
      restrict: 'E',
      bindToController: true,
      controller: Controller,
      controllerAs: 'productsCtrl',
      link: link,
      templateUrl: 'js/components/products/view.products.html',
      scope:'='
    };
  }

  function link(scope, elem, attr, vm) {

  }

  Controller.$inject = ['$scope', '$location', 'ajax', 'cart'];
  function Controller($scope, $location, ajax, cart) {
    const vm = this;
    vm.products = [];
    vm.amount = 1;

    vm.getProducts = () => {
      ajax.getProducts().then(productsApi => {
        vm.products = productsApi.data;
      });
    };

    vm.addItem = (amount, item) => {
      cart.addItem(item, amount);
    };

    vm.getProducts();
  }

  function yes() {
    return function(input) {
      return input ? 'yes' : 'no';
    };
  }
})();
