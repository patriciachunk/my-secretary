(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantForm', xtMutantForm);

  function xtMutantForm() {
    return {
      templateUrl: 'app/mutantList/directive/mutantForm.html',
      restrict: 'E',
      controller: MutantFormController,
      controllerAs: 'vm',
      bindTocontroller: true,
      scope: {
        mutants: '=',
      },
    };
  }

  MutantFormController.$inject = ['mutantService'];

  function MutantFormController(mutantService) {
    var vm = this;

    vm.addMutant = addMutant;
    vm.newMutant = new MutantService.Mutant();

    function addMutant() {
       vm.mutants.$add(vm.newMutant);
       vm.newMutant = new mutantService.Mutant();
     }
  }
})();
