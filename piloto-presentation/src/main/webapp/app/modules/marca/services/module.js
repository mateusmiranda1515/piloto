/**
 * Created by igorsantana on 12/08/2015 11:48:12.
 */

define(function(require){
    var angular = require('angular');    var MarcaService = require('app/modules/marca/services/MarcaService');
    return angular.module('app.marca.services',[])
        .service('MarcaService',MarcaService);
});