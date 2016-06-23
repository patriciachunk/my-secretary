(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('textMessageService', textMessageService);

    textMessageService.$inject = ['firebaseDataService'];

     function textMessageService(firebaseDataService) {
       var service = {
         sendText: sendText,
       };

    return service;

    /////////////////////////////

    function sendText(mutant, mutants) {
       var newText = {
         name: mutant.name,
         topic: mutant.topic,
         phoneNumber: mutant.phone
       };
       firebaseDataService.texts.push(newText);
       mutant.notified = true;
       mutants.$save(mutant);
     }
  }
})();
