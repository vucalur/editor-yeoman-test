'use strict';

// TODO vucalur: rename main.js → editor.js


function EditCtrl($window, $scope, jsonStorageService) {
	$scope.script = jsonStorageService.query();

	function addParam(whereToAdd, kvHolder) {
		$window.alert(whereToAdd);
		whereToAdd.params[kvHolder.key] = kvHolder.value;
		kvHolder.key = kvHolder.value = '';
	}

	$scope.addSectionParam = function () {
		addParam($scope.script.sections, $scope);
	};
}

EditCtrl.$inject = ['$window', '$scope', 'jsonStorageService'];


// TODO vucalur: make below working:
//angular.module('editorApp', ['editorAppServices'])
//	.controller('EditCtrl',
//		['$scope', '$jsonStorageService',
//			function ($scope, jsonStorageService) {
//				  $scope.script = jsonStorageService.query();
////				$scope.script = ['dsfd', 'fdfff', 'jjj'];
//			}
//		]);
