(function() {

  'use strict';
  const server = 'http://localhost:3000';
  angular
    .module('alApp.components.ajax')
    .service('ajax', Ajax);
    Ajax.$inject = ['$http', '$q', '$routeParams'];

  function Ajax($http, $q, $routeParams) {
    /*jshint validthis: true */
    const vm = this;
    //get all products
    vm.getProducts = () => $http.get(`${server}/products`);
    //get one product
    vm.getProduct = (itemIndex) => $http.get(`${server}/products/${itemIndex}`);

    // vm.updateProductCount = (change, itemIndex) => {
    //   const itemObject = {};
    //   return vm.getProduct(itemIndex).then(item => {
    //     if (item.stock + change < 0) {
    //       itemObject.stock = 0;
    //
    //     }
    //     return $http.post(`${server}/products/${itemIndex}.`, {itemObject});
    //   });
    //
    // };
  }
})();
