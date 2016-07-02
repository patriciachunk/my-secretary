(function() {
  'use strict';

  angular
    .module('mySecretary.core')
    .factory('todoService', todoService);

    todoService.$inject = ['$firebaseArray', 'firebaseDataService'];

    function todoService($firebaseArray, firebaseDataService) {
      var todos = null;

      var service = {
        Todo: Todo,
        todosByUser: todosByUser,
        reset: reset,
      };

      return service;

      //////////////////////////////

      function Todo() {
        this.name = '';
        this.phone = '';
        this.topic = '';
        this.notified = false;
        this.complete = false;
      }

      function todosByUser(uid) {
        if(!todos) {
          todos = $firebaseArray(firebaseDataService.users.child(uid).child('todos'));
        }
        return todos;
      }

      function reset() {
        if (todos) {
          todos.$destroy();
          todos = null;
        }
      }
    }
})();
