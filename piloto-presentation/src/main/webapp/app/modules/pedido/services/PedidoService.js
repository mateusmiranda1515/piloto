define(['app/apiLocations'], function (APILocation) {

    PedidoService.$inject = ['GumgaRest', '$stateParams'];

    function PedidoService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/pedido');
       return Service;
    }

    return PedidoService;
});
