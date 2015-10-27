(function() {

  'use strict';

  angular.module('app.components.peopleGrid')
  //prefix names so that they don't get confused
  //don't [$scope, function []]...etc
  // use name functions peopleGridDirective
    .directive('gsPeopleGrid', peopleGridDirective);

    function peopleGridDirective() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/peopleGrid/peopleGrid.html',
        scope: {},
        //contructor is normally capitalized
        controller: PeopleGridController,
        controllerAs: 'vm',
        bindToController: true
      };
    }



    PeopleGridController.$inject = ['dataservice', 'logger'];

    function PeopleGridController(dataservice, logger) {
      //vm across the board
      var vm = this;

      vm.people = [];

      vm.activate = activate;

      function activate() {
          getPeople();
      }

      function getPeople() {
            return dataservice.getPeople()
              .then(function (data) {
                vm.people = data;
                logger.info('Activated People Grid View');
                return vm.people;
            });
        }
  }

})();
