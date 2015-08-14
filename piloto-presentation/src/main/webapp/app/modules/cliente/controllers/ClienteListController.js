define([], function () {

    ClienteListController.$inject = ['$scope', 'ClienteService', 'populateScope' ];
    function ClienteListController($scope, ClienteService,populateScope ) {

         populateScope($scope,ClienteService,'Cliente','base-list');
     }

    return ClienteListController;

});