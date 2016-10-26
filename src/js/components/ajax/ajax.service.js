(function() {

  'use strict';
  const server = 'http://localhost:3000';
  angular
    .module('alApp.components.ajax')
    .service('ajax', Ajax);
    Ajax.$inject = ['$http', '$q'];

  function Ajax($http, $q) {
    /*jshint validthis: true */
    const vm = this;
    //get all products
    vm.getProducts = () => $http.get(`${server}/products`);
    //get one product
    vm.getProduct = (itemIndex) => $http.get(`${server}/products/${itemIndex}`);
}

})();
