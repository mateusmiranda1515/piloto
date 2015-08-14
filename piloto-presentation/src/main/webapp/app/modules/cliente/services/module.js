/**
 * Created by igorsantana on 12/08/2015 11:48:01.
 */

define(function(require){
    var angular = require('angular');    var ClienteService = require('app/modules/cliente/services/ClienteService');
    return angular.module('app.cliente.services',[])
        .service('ClienteService',ClienteService);
});