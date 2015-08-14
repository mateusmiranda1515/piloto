/**
 * Created by igorsantana on 12/08/2015 11:48:04.
 */

define(function(require){
    var angular = require('angular');    var PedidoService = require('app/modules/pedido/services/PedidoService');
    return angular.module('app.pedido.services',[])
        .service('PedidoService',PedidoService);
});