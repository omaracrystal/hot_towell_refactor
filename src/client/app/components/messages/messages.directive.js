(function(){
  'use strict';
  angular.module('app.components.messages')
  //prefix names so that they don't get confused
  //don't [$scope, function []]...etc
  // use name functions messagesDirective
    .directive('gsMessages', messagesDirective);

    function messagesDirective() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/messages/messages.html',
        scope: {
          title: '@',
          color: '@'
        },
        controller: MessagesController,
        controllerAs: 'vm',
        bindToController: true
      };
    }

    function MessagesController() {
      var vm = this;

    }

})();
