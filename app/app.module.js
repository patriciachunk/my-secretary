(function() {
  'use strict';

  angular.module('mySecretary', [
    //Angular modules
    'ui.router',
    //Third-party modules
    'firebase',

    //Custon modules
    'mySecretary.home',
    'mySecretary.todoList',
    'mySecretary.auth',
    'mySecretary.core',
    'mySecretary.layout',
  ])
  .config(configFunction)
  .run(runFunction);

   configFunction.$inject = ['$urlRouterProvider'];

   function configFunction($urlRouterProvider) {
     $urlRouterProvider.otherwise('/');
   }
   runFunction.$inject = ['$rootScope', '$state'];

   function runFunction($rootScope, $state) {
     $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
       if (error === "AUTH_REQUIRED") {
         $state.go('login');
       }
     });
   }
})();
