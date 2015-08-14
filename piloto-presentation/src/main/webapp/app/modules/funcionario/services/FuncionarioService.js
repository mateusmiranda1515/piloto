define(['app/apiLocations'], function (APILocation) {

    FuncionarioService.$inject = ['GumgaRest', '$stateParams'];

    function FuncionarioService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/funcionario');
       return Service;
    }

    return FuncionarioService;
});
