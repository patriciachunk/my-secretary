(function() {
  'use strict';

  angular
    .module('mySecretary.core')
    .factory('firebaseDataService', firebaseDataService);

    function firebaseDataService() {
      var root = firebase.database().ref();

      var service = {
        root: root,
        texts: root.child('texts'),
        todos: root.child('todos'),
        users: root.child('users'),
        emails: root.child('emails'),
      };

      return service;
    }
})();
