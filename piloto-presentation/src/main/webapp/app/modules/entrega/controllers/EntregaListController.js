define([], function () {

    EntregaListController.$inject = ['$scope', 'EntregaService', 'populateScope' ];
    function EntregaListController($scope, EntregaService,populateScope ) {

         populateScope($scope,EntregaService,'Entrega','base-list');
         
          $scope.conf = {
			 	columns : 'quando,quantidade,endereco.localization,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'quando',
			 			size : 'col-md-2',
			 			title : 'Quando'
			 		},{
			 			name : 'quantidade',
			 			size : 'col-md-2',
			 			title : 'Quantidade'
			 		},{
			 			name : 'endereco.localization',
			 			size : 'col-md-1',
			 			title : 'Endereço'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="entrega.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
     }

    return EntregaListController;

});