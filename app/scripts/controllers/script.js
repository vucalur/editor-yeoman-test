'use strict';

angular.module('editorApp.controller')
  .controller('ScriptCtrl',
    ['$scope', 'jsonStorageService',
      function ($scope, jsonStorageService) {
        $scope.script = jsonStorageService.query();

        $scope.addParam = function () {
          $scope.script.params[$scope.key] = $scope.value;
          $scope.key = $scope.value = '';
        };
      }]);
