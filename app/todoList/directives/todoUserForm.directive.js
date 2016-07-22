(function() {
  'use strict';

  angular
    .module('mySecretary.todoList')
    .directive('xtTodoUserForm', xtTodoUserForm);

  function xtTodoForm() {
    return {
      templateUrl: 'app/todoList/directives/todoUserForm.html',
      restrict: 'E',
      controller: TodoUserFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        todos: '=',
      },
    };
  }

  TodoFormController.$inject = ['todoService'];

  function TodoFormController(todoService) {
    var vm = this;

    vm.addTodo = addTodo;
    vm.newTodo = new todoService.Todo();

    function addTodo() {
       vm.todos.$add(vm.newTodo);
       vm.newTodo = new todoService.Todo();
     }
  }
})();
