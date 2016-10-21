(function() {

  'use strict';

  $(document).ready(function() {
    $('select').material_select();
  });

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($locationProvider, $routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'index.html'
    })
    .otherwise('/', {
      templateUrl: 'index.html'
    });

    $locationProvider.html5Mode(true);
  }


})();
