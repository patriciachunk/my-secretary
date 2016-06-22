(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AthController', AuthController);

    AuthController.$inject = ['$firebaseAuth'];

    fucntion AuthController() {
      var vm = this;
      var auth = $firebaseAuth();

      vm.register = register;

      vm.user = {
        email: '',
        password: ''
      }

      function register(user) {
        return auth.$createUserWithEmailandPassword(user.email, user.password);
      }
    }
})
