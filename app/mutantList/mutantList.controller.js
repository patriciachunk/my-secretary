(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

    MutantListController.$inject = ['mutantService', 'firebaseDataService'];

    function MutantListController(mutantService, firebaseDataService) {
      var vm = this;


      vm.addMutant = addMutant;
      vm.mutants = mutantService.mutants;
      vm.newMutant = new mutantService.Mutant();
      vm.deleteMutant = deleteMutant;
      vm.toggleComplete = toggleComplete;
      vm.sendText = sendText;

      function addMutant() {
        vm.mutants.$add(vm.newMutant);
        vm.newMutant = new mutantService.Mutant();
      }

      function deleteMutant(mutant) {
        vm.mutants.$remove(mutant);
      }

      function toggleComplete(mutant) {
        vm.mutants.$save(mutant);
      }

      function sendText(mutant) {
        // build text object
        var newText = {
          name: mutant.name,
          topic: mutant.topic,
          phoneNumber: mutant.phone
        };
        // save text to firebase
        firebaseDataService.texts.push(newText);
        // change notified to true
        mutant.notified = true;
        // save mutant
        vm.mutants.$save(mutant);
      }
    }
})();
