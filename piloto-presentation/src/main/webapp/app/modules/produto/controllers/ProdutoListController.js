define([], function () {

    ProdutoListController.$inject = ['$scope', 'ProdutoService', 'populateScope'];
    function ProdutoListController($scope, ProdutoService, populateScope) {

        populateScope($scope, ProdutoService, 'Produto', 'base-list');

        $scope.conf = {
            columns: 'nome,valor.value,quantidade,marca.nome,action',
            itemsPerPage: [2, 4, 6, 8, 10],
            selection: 'multi',
            columnsConfig: [
                {
                    name: 'nome',
                    size: 'col-md-2',
                    title: 'Nome',
                    sortField: 'nome'
                }, {
                    name: 'valor.value',
                    size: 'col-md-2',
                    title: 'Valor'
                }, {
                    name: 'quantidade',
                    size: 'col-md-1',
                    title: 'Quantidade'
                }, {
                    name: 'marca.nome',
                    size: 'col-md-1',
                    title: 'Marca'
                }, {
                    name: 'action',
                    title: 'Ação:',
                    size: 'col-md-1',
                    content: '<button type="button" ui-sref="produto.edit({id: $value.id})" class="btn btn-info">Editar</button>'
                }
            ]
        };
    }

    return ProdutoListController;

});