'use strict';

angular.module('editorApp.controller')
  .controller('SlotCtrl', function ($scope) {
    $scope.token = '';

    $scope.addToken = function () {
      $scope.slot.tokens.push($scope.token);
      $scope.token = '';
    };
  });
