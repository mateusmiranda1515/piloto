define([], function () {

    MarcaListController.$inject = ['$scope', 'MarcaService', 'populateScope' ];
    function MarcaListController($scope, MarcaService,populateScope ) {

         populateScope($scope,MarcaService,'Marca','base-list');
     }

    return MarcaListController;

});