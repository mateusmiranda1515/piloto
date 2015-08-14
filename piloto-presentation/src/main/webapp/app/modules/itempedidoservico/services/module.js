/**
 * Created by igorsantana on 12/08/2015 11:48:07.
 */

define(function(require){
    var angular = require('angular');    var ItemPedidoServicoService = require('app/modules/itempedidoservico/services/ItemPedidoServicoService');
    return angular.module('app.itempedidoservico.services',[])
        .service('ItemPedidoServicoService',ItemPedidoServicoService);
});