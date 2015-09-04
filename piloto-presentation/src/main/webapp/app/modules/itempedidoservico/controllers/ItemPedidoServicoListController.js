define([], function () {

    ItemPedidoServicoListController.$inject = ['$scope', 'ItemPedidoServicoService', 'populateScope' ];
    function ItemPedidoServicoListController($scope, ItemPedidoServicoService,populateScope ) {
         populateScope($scope,ItemPedidoServicoService,'ItemPedidoServico','base-list');
         $scope.conf = {
			 	columns : 'servico.nome,horas,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'servico.nome',
			 			size : 'col-md-2',
			 			title : 'Serviço'
			 		},{
			 			name : 'horas',
			 			size : 'col-md-2',
			 			title : 'Horas'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="itempedidoservico.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
    }

    return ItemPedidoServicoListController;

});