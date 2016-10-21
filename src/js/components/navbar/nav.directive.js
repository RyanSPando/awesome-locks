(function() {

  'use strict';

  angular
    .module('alApp.components.nav')
    .directive('alNav', navDirective);


  function navDirective() {
    /*jshint validthis: true */
    return {
      restrict: 'E',
      bindToController: true,
      controller: Controller,
      controllerAs: 'navCtrl',
      link: link,
      templateUrl: 'js/components/navbar/view.nav.html'

    };

    function link(scope, elem, attr, vm) {

    }
  }
  Controller.$inject = ['$scope', '$location'];
  function Controller($scope, $location) {

    this.home = () => {
      $location.path('/');
    };

    this.about = () => {
      $location.path('/about');
    };

    this.contact = () => {
      $location.path('/contact');
    };

    this.cart = () => {
      $location.path('/cart');
    };
  }
})();
