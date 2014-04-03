'use strict';


// Declare app level module which depends on filters, and services
angular.module('Aya', [
  'Aya.filters',
  'Aya.services',
  'Aya.directives',
  'Aya.controllers'
    ]
)
.run(['AppModel', '$http', function(AppModel, $http){
    $http.get('/data/playlist.json')
        .success(function(data){
            AppModel.playlist = data;
        });
}]);
