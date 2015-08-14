define(['app/apiLocations'], function (APILocation) {

    ItemPedidoProdutoService.$inject = ['GumgaRest', '$stateParams'];

    function ItemPedidoProdutoService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/itempedidoproduto');
       return Service;
    }

    return ItemPedidoProdutoService;
});
