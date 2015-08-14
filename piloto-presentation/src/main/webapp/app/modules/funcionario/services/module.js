/**
 * Created by igorsantana on 12/08/2015 11:47:59.
 */

define(function(require){
    var angular = require('angular');    var FuncionarioService = require('app/modules/funcionario/services/FuncionarioService');
    return angular.module('app.funcionario.services',[])
        .service('FuncionarioService',FuncionarioService);
});