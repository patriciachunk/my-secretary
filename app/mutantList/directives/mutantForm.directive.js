(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantForm', xtMutantForm);

  function xtMutantForm() {
    return {
      templateUrl: 'app/mutantList/directive/mutantForm.html',
      restrict: 'E',
      
    }
  }
})
