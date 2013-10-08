'use strict';

angular.module('editorApp.directive')
  .directive('removable', function () {
    return {
      template: '<div></div>',
      transclude: true,
      restrict: 'A',
      link: function postLink(scope, element) {
        element.text('this is the removable directive');
      }
    };
  });
