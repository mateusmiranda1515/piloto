define(['app/apiLocations'], function (APILocation) {

    HorarioTrabalhoService.$inject = ['GumgaRest', '$stateParams'];

    function HorarioTrabalhoService(GumgaRest, $stateParams) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/horariotrabalho');
        Service.valueDiaDaSemana=[{value:"DOMINGO",label:"domingo"},{value:"SEGUNDA",label:"segunda"},{value:"TERÇA",label:"terça"},{value:"QUARTA",label:"quarta"},{value:"QUINTA",label:"quinta"},{value:"SEXTA",label:"sexta"},{value:"SABADO",label:"sabado"}];
       return Service;
    }

    return HorarioTrabalhoService;
});
