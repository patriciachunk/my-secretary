(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantTable', xtMutantTable);

    function xtMutantTable() {
      return {
        templateUrl: 'app/mutantList/directives/mutantTable.html',
        restrict: 'E',
        controller: MutantTableController,
        controllerAs: 'vm',
        bindTocontroller: true,
        scope: {
          mutants: '=',
        },
      };
    }

    MutantTableController.$inject = ['textMessageService'];

    function MutantTableController(textMessageService) {

      function deleteMutant(mutant) {
        vm.mutants.$remove(mutant);
      }

      function toggleComplete(mutant) {
        vm.mutants.$save(mutant);
      }

      function sendText(mutant) {
        textMessageService.sendText(mutant, vm.mutants);
      }

    }
})();
