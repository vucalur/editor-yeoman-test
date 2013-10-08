'use strict';

angular.module('editorApp.controller')
  .controller('SentenceCtrl', function ($scope) {
    $scope.key = $scope.value = ''; // without it, would bind to properties from parent scope

    $scope.addParam = function () {
      $scope.sentence.params[$scope.key] = $scope.value;
      $scope.key = $scope.value = '';
    };
  });
