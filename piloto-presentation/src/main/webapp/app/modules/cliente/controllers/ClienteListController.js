define([], function () {

    ClienteListController.$inject = ['$scope', 'ClienteService', 'populateScope' ];
    function ClienteListController($scope, ClienteService,populateScope ) {

         populateScope($scope,ClienteService,'Cliente','base-list');
          $scope.conf = {
			 	columns : 'nome,email.value,telefone.value,endereco.localization,ativo.value,cnpj.value,url.value,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'nome',
			 			size : 'col-md-2',
			 			title : 'Nome'
			 		},{
			 			name : 'email.value',
			 			size : 'col-md-2',
			 			title : 'Email'
			 		},{
			 			name : 'telefone.value',
			 			size : 'col-md-1',
			 			title : 'Telefone'
			 		},{
			 			name : 'endereco.localization',
			 			size : 'col-md-1',
			 			title : 'Endereço'
			 		},{
			 			name : 'ativo.value',
			 			size : 'col-md-1',
			 			title : 'Ativo'
			 		},{
			 			name : 'cnpj.value',
			 			size : 'col-md-1',
			 			title : 'CNPJ'
			 		},{
			 			name : 'url.value',
			 			size : 'col-md-1',
			 			title : 'Url'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="cliente.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
     }

    return ClienteListController;

});
