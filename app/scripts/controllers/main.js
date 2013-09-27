'use strict';

// TODO vucalur: rename main.js → editor.js


function EditCtrl($scope, jsonStorageService) {
	$scope.script = jsonStorageService.query();
}

EditCtrl.$inject = ['$scope', 'jsonStorageService'];


// TODO vucalur: make below working:
//angular.module('editorApp', ['editorAppServices'])
//	.controller('EditCtrl',
//		['$scope', '$jsonStorageService',
//			function ($scope, jsonStorageService) {
//				  $scope.script = jsonStorageService.query();
////				$scope.script = ['dsfd', 'fdfff', 'jjj'];
//			}
//		]);
