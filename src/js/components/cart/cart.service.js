(function() {

  'use strict';

  angular
    .module('alApp.components.cart')
    .service('cart', cartService);

  function cartService() {
    /*jshint validthis: true */
    const vm = this;
    this.cart = [];
    vm.addItem = (item, amount) => {
      console.log(amount);
      const index  = this.cart.map(value => value._id).indexOf(item._id);
      if (index === -1) {

        const newItem = Object.assign({}, item);
        newItem.quantity = parseInt(amount) || 1;
        this.cart.push(newItem);
      }
      else {
        this.cart[index].quantity += parseInt(amount) || 1;
      }
      console.log(this.cart);
    };

  }
})();
