(function() {
  'use strict';

  angular
    .module('mySecretary.core')
    .factory('textMessageService', textMessageService);

    textMessageService.$inject = ['firebaseDataService'];

     function textMessageService(firebaseDataService) {
       var service = {
         sendText: sendText,
       };

    return service;

    /////////////////////////////

    function sendText(todo, todos) {
       var newText = {
         name: todo.name,
         topic: todo.topic,
         phoneNumber: todo.phone
       };
       firebaseDataService.texts.push(newText);
       todo.notified = true;
       todos.$save(todo);
     }
  }
})();
