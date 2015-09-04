define([], function () {

    MarcaListController.$inject = ['$scope', 'MarcaService', 'populateScope' ];
    function MarcaListController($scope, MarcaService,populateScope ) {

         populateScope($scope,MarcaService,'Marca','base-list');
                  
          $scope.conf = {
			 	columns : 'id,nome,location,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'id',
			 			size : 'col-md-2',
			 			title : 'Codigo'
			 		},{
			 			name : 'nome',
			 			size : 'col-md-2',
			 			title : 'Nome'
			 		},{
			 			name : 'location',
			 			size : 'col-md-1',
			 			title : 'Localização'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="marca.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
         
     }

    return MarcaListController;

});