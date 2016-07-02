(function() {
  'use strict';

  angular
    .module('mySecretary.todoList')
    .directive('xtTodoForm', xtTodoForm);

  function xtTodoForm() {
    return {
      templateUrl: 'app/todoList/directives/todoForm.html',
      restrict: 'E',
      controller: TodoFormController,
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
