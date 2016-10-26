(function() {

  'use strict';

  angular
    .module('alApp.components.cart')
    .service('cart', cartService);

  function cartService() {
    /*jshint validthis: true */
    const vm = this;
    const taxRate = 0.0875;
    vm.cart = [];
    vm.subtotal = 0;
    vm.tax = 0;
    vm.total = 0;

    vm.addItem = (item, amount) => {
      const index  = this.cart.map(value => value._id).indexOf(item._id);

      if (index === -1) {
        const newItem = Object.assign({}, item);
        newItem.quantity = parseInt(amount) || 1;
        vm.cart.push(newItem);
      }
      else {
        vm.cart[index].quantity += parseInt(amount) || 1;
      }
      vm.updateTotal();
    };

    vm.getCart = function() {
      return {
        cart: vm.cart,
        subtotal: vm.subtotal,
        tax: vm.tax,
        total: vm.total
      };
    };

    vm.remove = function (index) {
      vm.cart.splice(index, 1);
      vm.updateTotal();
    };

    vm.up = function(index) {
      ++vm.cart[index].quantity;
      vm.updateTotal();
    };

    vm.down = function(index) {
      --vm.cart[index].quantity;
      vm.updateTotal();
    };

    vm.updateTotal = () => {
      vm.subtotal = vm.cart.map(item => item.quantity * item.price).reduce((a,b) => a + b, 0);
      vm.tax = vm.subtotal * taxRate;
      vm.total = vm.subtotal + vm.tax;
    };
  }
})();
