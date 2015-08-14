define(['app/apiLocations'], function (APILocation) {

    ServicoService.$inject = ['GumgaRest', '$stateParams'];

    function ServicoService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/servico');
       return Service;
    }

    return ServicoService;
});
