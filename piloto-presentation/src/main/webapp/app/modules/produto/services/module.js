/**
 * Created by igorsantana on 12/08/2015 11:48:09.
 */

define(function(require){
    var angular = require('angular');    var ProdutoService = require('app/modules/produto/services/ProdutoService');
    return angular.module('app.produto.services',[])
        .service('ProdutoService',ProdutoService);
});