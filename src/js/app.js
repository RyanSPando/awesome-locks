(function() {

  'use strict';
  angular
    .module('alApp', [
      "firebase",
      'ngRoute',
      'ngAnimate',
      'ui.materialize',
      'alApp.config',
      'alApp.components.nav',
      'alApp.components.ajax',
      'alApp.components.cart',
      'alApp.components.products'
    ]);

})();
