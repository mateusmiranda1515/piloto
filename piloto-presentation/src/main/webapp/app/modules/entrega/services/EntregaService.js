define(['app/apiLocations'], function (APILocation) {

    EntregaService.$inject = ['GumgaRest', '$stateParams'];

    function EntregaService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/entrega');
       return Service;
    }

    return EntregaService;
});
