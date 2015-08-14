define([], function () {

    PedidoListController.$inject = ['$scope', 'PedidoService', 'populateScope' ];
    function PedidoListController($scope, PedidoService,populateScope ) {

         populateScope($scope,PedidoService,'Pedido','base-list');
     }

    return PedidoListController;

});