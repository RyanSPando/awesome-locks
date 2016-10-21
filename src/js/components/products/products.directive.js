(function() {

  'use strict';

  angular
    .module('alApp.components.products')
    .directive('alProducts', productsDirective);


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

    function link(scope, elem, attr, vm) {

    }
  }
  Controller.$inject = ['$scope', '$location', 'ajax'];
  function Controller($scope, $location, ajax) {
    const vm = this;
    vm.products = [];

    vm.getProducts = () => {
      ajax.getProducts().then(productsApi => {
        vm.products = productsApi.data;
      });
    };

    vm.getProducts();
  }
})();
