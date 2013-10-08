'use strict';

// TODO vucalur: rename: editorApp → editor
angular.module('editorApp.controller', ['editorApp.service']);
angular.module('editorApp.directive', []);
angular.module('editorApp.service', []);

angular.module('editorApp', ['ngRoute', 'editorApp.controller'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/editor', {
        templateUrl: 'views/edit.html',
        controller: 'ScriptCtrl'
      })
      .otherwise({
        redirectTo: '/editor'
      });
  }]);
