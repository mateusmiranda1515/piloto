/**
 * Created by igorsantana on 12/08/2015 11:48:05.
 */

define(function(require){
    var angular = require('angular');    var ItemPedidoProdutoService = require('app/modules/itempedidoproduto/services/ItemPedidoProdutoService');
    return angular.module('app.itempedidoproduto.services',[])
        .service('ItemPedidoProdutoService',ItemPedidoProdutoService);
});