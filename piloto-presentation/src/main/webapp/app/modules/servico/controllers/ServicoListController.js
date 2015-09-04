define([], function () {

    ServicoListController.$inject = ['$scope', 'ServicoService', 'populateScope' ];
    function ServicoListController($scope, ServicoService,populateScope ) {

         populateScope($scope,ServicoService,'Servico','base-list');
          $scope.conf = {
			 	columns : 'nome,codigoUniversal,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'nome',
			 			size : 'col-md-2',
			 			title : 'Nome'
			 		},{
			 			name : 'codigoUniversal',
			 			size : 'col-md-2',
			 			title : 'Codigo Universal'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="servico.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
     }

    return ServicoListController;

});