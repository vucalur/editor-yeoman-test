'use strict';

angular.module('editorAppServices', ['ngResource'])
	.factory('jsonStorageService', function ($resource) {
		return $resource('data/script.json', {}, {
			query: {method: 'GET'}
		});
	});