define(['app/apiLocations'], function (APILocation) {

    ItemPedidoServicoService.$inject = ['GumgaRest', '$stateParams'];

    function ItemPedidoServicoService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/itempedidoservico');
       return Service;
    }

    return ItemPedidoServicoService;
});
