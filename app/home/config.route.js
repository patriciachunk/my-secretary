(function() {
  'use strict';

  angular
    .module('mySecretary.home')
    .config(configFunction);


    configFunction.$inject = ['$stateProvider'];

    function configFunction($stateProvider) {
      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/home/home.html'

      });
    }
})();
