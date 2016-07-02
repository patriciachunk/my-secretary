(function() {
  'use strict';

  angular
    .module('mySecretary.auth')
    .config(configFunction);

    configFunction.$inject = ['$stateProvider'];

    function configFunction($stateProvider) {
      $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'app/auth/register.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      });
      $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/auth/login.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      });
    }
})();
