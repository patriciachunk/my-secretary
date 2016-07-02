(function() {
   'use strict';

   angular
     .module('mySecretary.auth')
     .factory('authService', authService);

   authService.$inject = ['$firebaseAuth', 'firebaseDataService', 'todoService'];

   function authService($firebaseAuth, firebaseDataService, todoService) {
     var auth = $firebaseAuth();

     var service = {
       auth: auth,
       register: register,
       login: login,
       logout: logout,
       isLoggedIn: isLoggedIn,
       sendWelcomeEmail: sendWelcomeEmail,
     };

     return service;

     //////////////

    function register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password);
    }

    function login(user) {
       return auth.$signInWithEmailAndPassword(user.email, user.password);
     }

     function logout() {
       todoService.reset();
       auth.$signOut();
     }
     function isLoggedIn() {
       return auth.$getAuth();
     }

     function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      })
     }
   }
 })();
