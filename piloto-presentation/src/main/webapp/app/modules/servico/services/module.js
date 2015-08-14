/**
 * Created by igorsantana on 12/08/2015 11:48:11.
 */

define(function(require){
    var angular = require('angular');    var ServicoService = require('app/modules/servico/services/ServicoService');
    return angular.module('app.servico.services',[])
        .service('ServicoService',ServicoService);
});