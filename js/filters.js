'use strict';

/* Filters */

angular.module('Aya.filters', [])
    .filter('formattedDuration', [function(){
        return function(time){
            var sec = parseInt(time, 10);
            var min = parseInt(sec/60, 10);
            var formattedString;

            sec = sec % 60;

            if (sec < 10){
                sec = '0' + sec;
            }

            formattedString = min + ':' + sec;

            return formattedString;
        };
    }]);
