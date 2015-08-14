/**
 * Created by igorsantana on 12/08/2015 11:48:02.
 */

define(function(require){
    var angular = require('angular');    var HorarioTrabalhoService = require('app/modules/horariotrabalho/services/HorarioTrabalhoService');
    return angular.module('app.horariotrabalho.services',[])
        .service('HorarioTrabalhoService',HorarioTrabalhoService);
});