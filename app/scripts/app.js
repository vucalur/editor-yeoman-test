'use strict';

// TODO vucalur: rename: editorApp → editor
angular.module('editorApp', ['editorAppServices'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/editor', {
				templateUrl: 'views/edit.html',
				controller: 'EditCtrl'
			})
			.otherwise({
				redirectTo: '/editor'
			});
	}]);
