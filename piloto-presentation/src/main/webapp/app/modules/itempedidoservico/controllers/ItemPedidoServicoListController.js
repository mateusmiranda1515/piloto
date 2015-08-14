define([], function () {

    ItemPedidoServicoListController.$inject = ['$scope', 'ItemPedidoServicoService', 'populateScope' ];
    function ItemPedidoServicoListController($scope, ItemPedidoServicoService,populateScope ) {

         populateScope($scope,ItemPedidoServicoService,'ItemPedidoServico','base-list');
     }

    return ItemPedidoServicoListController;

});