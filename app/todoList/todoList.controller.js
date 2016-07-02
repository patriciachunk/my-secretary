(function() {
  'use strict';

  angular
    .module('mySecretary.todoList')
    .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['todoService', 'user'];

    function TodoListController(todoService, user) {
      var vm = this;

      vm.todos = todoService.todosByUser(user.uid);

    }
})();
