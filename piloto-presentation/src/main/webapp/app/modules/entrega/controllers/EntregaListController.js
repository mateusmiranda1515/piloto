define([], function () {

    EntregaListController.$inject = ['$scope', 'EntregaService', 'populateScope' ];
    function EntregaListController($scope, EntregaService,populateScope ) {

         populateScope($scope,EntregaService,'Entrega','base-list');
     }

    return EntregaListController;

});