(function () {
    "use strict";
    
var app = angular.module('pueba', []);

    
    app.controller('meController',function($scope){
       $scope.nombre='Mary';
       $scope.datos=[
           {id:1,nombre:'Mary',peso:'55 kg',estatura:'1.60mts'},
           {id:2,nombre:'Diego',peso:'60 kg',estatura:'1.78mts'},
           {id:3,nombre:'Martha',peso:'30 kf',estatura:'1.50mts'}
           ]
        });
            });