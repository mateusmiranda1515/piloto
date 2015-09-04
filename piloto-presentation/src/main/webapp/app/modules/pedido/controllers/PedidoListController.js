define([], function () {

    PedidoListController.$inject = ['$scope', 'PedidoService', 'populateScope' ];
    function PedidoListController($scope, PedidoService,populateScope ) {

         populateScope($scope,PedidoService,'Pedido','base-list');
         
          $scope.conf = {
			 	columns : 'numero,quando,cliente.nome,enderecoDeEntrega.localization,produtos,servicos,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'numero',
			 			size : 'col-md-2',
			 			title : 'Numero',
                                                sortField: 'numero'
			 		},{
			 			name : 'quando',
			 			size : 'col-md-2',
			 			title : 'Quando'
			 		},{
			 			name : 'cliente.nome',
			 			size : 'col-md-2',
			 			title : 'Cliente'
			 		},{
			 			name : 'enderecoDeEntrega.localization',
			 			size : 'col-md-2',
			 			title : 'Endereço De Entrega'
			 		},{
			 			name : 'produtos',
			 			size : 'col-md-2',
			 			title : 'Produtos'
			 		},{
			 			name : 'servicos',
			 			size : 'col-md-2',
			 			title : 'Serviços'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="pedido.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
     }

    return PedidoListController;

});