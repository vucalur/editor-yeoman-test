'use strict';

angular.module('editorApp.controller')
  .controller('SectionCtrl', function ($scope) {
    $scope.key = $scope.value = ''; // without it, would bind to properties from parent scope

    $scope.addParam = function () {
      $scope.section.params[$scope.key] = $scope.value;
      $scope.key = $scope.value = '';
    };
  });
