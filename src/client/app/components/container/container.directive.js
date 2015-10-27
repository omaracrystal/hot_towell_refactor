(function(){
  'use strict';
  angular.module('app.components.container')
  //prefix names so that they don't get confused
  //don't [$scope, function []]...etc
  // use name functions containerDirective
    .directive('gsContainer', containerDirective);

    function containerDirective() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/container/container.html',
        scope: {
          title: '@',
          color: '@'
        },
        controller: ContainerController,
        controllerAs: 'vm',
        bindToController: true,
        transclude: true
      };
    }

    function ContainerController() {
      var vm = this;

      vm.wColor = 'w' + vm.color;

    }
})();
