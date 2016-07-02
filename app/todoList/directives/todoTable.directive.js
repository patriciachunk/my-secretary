(function() {
  'use strict';

  angular
    .module('mySecretary.todoList')
    .directive('xtTodoTable', xtTodoTable);

    function xtTodoTable() {
      return {
        templateUrl: 'app/todoList/directives/todoTable.html',
        restrict: 'E',
        controller: TodoTableController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          todos: '=',
        },
      };
    }

    TodoTableController.$inject = ['textMessageService'];

    function TodoTableController(textMessageService) {
      var vm = this;

      vm.deleteTodo = deleteTodo;
      vm.toggleComplete = toggleComplete;
      vm.sendText = sendText;

      function deleteTodo(todo) {
        vm.todos.$remove(todo);
      }

      function toggleComplete(todo) {
        vm.todos.$save(todo);
      }

      function sendText(todo) {
        textMessageService.sendText(todo, vm.todos);
      }

    }
})();
