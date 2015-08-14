define([], function () {

    ProdutoListController.$inject = ['$scope', 'ProdutoService', 'populateScope' ];
    function ProdutoListController($scope, ProdutoService,populateScope ) {

         populateScope($scope,ProdutoService,'Produto','base-list');
     }

    return ProdutoListController;

});