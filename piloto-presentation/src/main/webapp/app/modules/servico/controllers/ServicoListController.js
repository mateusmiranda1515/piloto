define([], function () {

    ServicoListController.$inject = ['$scope', 'ServicoService', 'populateScope' ];
    function ServicoListController($scope, ServicoService,populateScope ) {

         populateScope($scope,ServicoService,'Servico','base-list');
     }

    return ServicoListController;

});