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

  Controller.$inject = ['$scope', '$location', 'cart'];
  function Controller($scope, $location, cart) {
    const vm = this;
    vm.cartObj = cart.getCart();


    vm.getCart = () => {
      vm.cartObj = cart.getCart();
    };

    vm.removeProduct = (index) => {
      cart.remove(index);
      vm.getCart();
    };

    vm.up = (index) => {
      if (vm.cartObj.cart[index].quantity < vm.cartObj.cart[index].stock)
        cart.up(index);
        vm.getCart();
    };

    vm.down = (index) => {

      if (vm.cartObj.cart[index].quantity > 0)
        cart.down(index);
        vm.getCart();
    };

  }
})();
