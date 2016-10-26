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

  Controller.$inject = ['$scope', '$location', 'ajax', 'cart', '$firebaseObject', '$timeout'];
  function Controller($scope, $location, ajax, cart, firebaseObject, $timeout) {
    const vm = this;
    vm.products = [];
    vm.amount = 1;
    vm.search = '';
    vm.orderby = '';
    vm.uniqueCategories = [];
    console.log('controller');

    vm.getProducts = () => {
      var ref = firebase.database().ref();

      ref.on("value", function(snapshot) {
        $timeout(function() {
          console.log('firing');
          console.log(snapshot.val());
          vm.products = snapshot.val().products;
          vm.uniqueCategories = categories(vm.products);
         });
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

  function categories(products) {

    const allCategories = [];
    products.forEach(product => product.categories.forEach(category => allCategories.push(category)));
    return allCategories.filter(onlyUnique);
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
})();
