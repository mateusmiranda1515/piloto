define(['app/apiLocations'], function (APILocation) {

    MarcaService.$inject = ['GumgaRest', '$stateParams'];

    function MarcaService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/marca');
       return Service;
    }

    return MarcaService;
});
