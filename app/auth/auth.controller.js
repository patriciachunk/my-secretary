(function() {
  'use strict';

  angular
    .module('mySecretary.auth')
    .controller('AuthController', AuthController);

    AuthController.$inject = ['$state', 'authService'];

    function AuthController($state, authService) {
      var vm = this;

      vm.register = register;
      vm.login = login;
      vm.error = null;


      vm.user = {
        email: '',
        password: ''
      }

      function register(user) {
        return authService.register(user)
          .then(function() {
            console.log("registered");
            vm.login(user);
          })
          .then(function() {
            return authService.sendWelcomeEmail(user.email);
          })
          .catch(function(error) {
            vm.error = error;
          });
      }

      function login(user) {
        return authService.login(user)
        .then(function(user) {
          $state.go('todoList');
        })
        .catch(function(error) {
          vm.error = error;
        });
      }


    }
})();
