'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('Aya.services', [])
    .value('version', '0.1')
    .service('AppModel', [function(){
        return {
            state: '',
            currentTrack: {},
            currentTrackNum: {},
            playlist: [],
            volume: 1,
            previousVolume: 0
        };
    }]);
