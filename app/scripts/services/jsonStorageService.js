'use strict';

angular.module('editorApp.service', ['ngResource'])
  .factory('jsonStorageService', function ($resource) {
    return $resource('data/script.json', {}, {
      query: {method: 'GET'}
    });
  });