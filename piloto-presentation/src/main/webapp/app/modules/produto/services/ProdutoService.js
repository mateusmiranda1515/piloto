define(['app/apiLocations'], function (APILocation) {

    ProdutoService.$inject = ['GumgaRest', '$stateParams'];

    function ProdutoService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/produto');
       return Service;
    }

    return ProdutoService;
});
