define(['app/apiLocations'], function (APILocation) {

    ClienteService.$inject = ['GumgaRest', '$stateParams'];

    function ClienteService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/cliente');
       return Service;
    }

    return ClienteService;
});
