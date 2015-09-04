define([], function () {

    ItemPedidoProdutoListController.$inject = ['$scope', 'ItemPedidoProdutoService', 'populateScope' ];
    function ItemPedidoProdutoListController($scope, ItemPedidoProdutoService,populateScope ) {

         populateScope($scope,ItemPedidoProdutoService,'ItemPedidoProduto','base-list');
          $scope.conf = {
			 	columns : 'produto.nome,quantidade,valor.value,entregas,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'produto.nome',
			 			size : 'col-md-2',
			 			title : 'Produto'
			 		},{
			 			name : 'quantidade',
			 			size : 'col-md-2',
			 			title : 'Quantidade'
			 		},{
			 			name : 'valor.value',
			 			size : 'col-md-1',
			 			title : 'Valor'
			 		},{
			 			name : 'entregas',
			 			size : 'col-md-1',
			 			title : 'Entregas'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="itempedidoproduto.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
     }

    return ItemPedidoProdutoListController;

});