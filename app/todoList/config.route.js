(function() {
  'use strict';

  angular
    .module('mySecretary.todoList')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('todoList', {
      url: '/todolist',
      templateUrl: 'app/todoList/todoList.html',
      controller: 'TodoListController',
      controllerAs: 'vm',
      resolve: {
        user: resolveUser,
      },
    });
  }

  resolveUser.$inject = ['authService'];

  function resolveUser(authService) {
    return authService.auth.$requireSignIn();
  }
})();
