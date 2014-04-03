'use strict';

/* Controllers */

angular.module('Aya.controllers', [])
    .controller('MainController', ['$scope', '$http', 'AppModel', function($scope, $http, AppModel) {
        $scope.model = AppModel;

        $scope.play = function(){};

        $scope.pause = function(){};

        $scope.next = function(){};

        $scope.prev = function(){};

        $scope.stop = function(){};

        $scope.selectTrack = function(){};
    }])

    .controller('VolumeController', ['$scope', 'AppModel', function($scope, AppModel){
        $scope.model = AppModel;
        $scope.volumeUp = function(){};
        $scope.volumeDown = function(){};
        $scope.toggleMute = function(){};
    }])

    .controller('ProgressController', ['$scope', function($scope){
        $scope.model = AppModel;
        $scope.seek = function(){};
    }])
