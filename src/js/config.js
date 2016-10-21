(function() {

  'use strict';

  $(document).ready(function() {
    $('select').material_select();
  });

  angular
    .module('alApp.config', [])
    .config(appConfig);

  function appConfig($locationProvider, $routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'index.html'
    })
    .when('/contact', {
      templateUrl: 'index.html'
    })
    .when('/about', {
      templateUrl: 'index.html'
    })
    .when('/cart', {
      templateUrl: 'index.html'
    })
    .otherwise('/', {
      templateUrl: 'index.html'
    });

    $locationProvider.html5Mode(true);
  }


})();
