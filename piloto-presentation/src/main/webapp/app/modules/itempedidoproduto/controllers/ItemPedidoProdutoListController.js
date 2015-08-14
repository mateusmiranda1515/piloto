define([], function () {

    ItemPedidoProdutoListController.$inject = ['$scope', 'ItemPedidoProdutoService', 'populateScope' ];
    function ItemPedidoProdutoListController($scope, ItemPedidoProdutoService,populateScope ) {

         populateScope($scope,ItemPedidoProdutoService,'ItemPedidoProduto','base-list');
     }

    return ItemPedidoProdutoListController;

});