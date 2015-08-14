/**
 * Created by igorsantana on 12/08/2015 11:48:08.
 */

define(function(require){
    var angular = require('angular');    var EntregaService = require('app/modules/entrega/services/EntregaService');
    return angular.module('app.entrega.services',[])
        .service('EntregaService',EntregaService);
});