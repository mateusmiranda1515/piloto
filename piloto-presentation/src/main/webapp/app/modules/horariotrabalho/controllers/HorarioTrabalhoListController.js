define([], function () {

    HorarioTrabalhoListController.$inject = ['$scope', 'HorarioTrabalhoService', 'populateScope' ];
    function HorarioTrabalhoListController($scope, HorarioTrabalhoService,populateScope ) {

         populateScope($scope,HorarioTrabalhoService,'HorarioTrabalho','base-list');
         
          $scope.conf = {
			 	columns : 'dia,horarioInicial.value,horarioFinal.value,ip4.value,ip6.value,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'dia',
			 			size : 'col-md-2',
			 			title : 'Dia',
                                                sortField: 'dia'
			 		},{
			 			name : 'horarioInicial.value',
			 			size : 'col-md-2',
			 			title : 'Horario inicial',
                                                sortField: 'horarioInicial'
			 		},{
			 			name : 'horarioFinal.value',
			 			size : 'col-md-1',
			 			title : 'Horario final',
                                                sortField: 'horarioFinal'
			 		},{
			 			name : 'ip4.value',
			 			size : 'col-md-1',
			 			title : 'IP4',
                                                sortField: 'ip4'
			 		},{
			 			name : 'ip6.value',
			 			size : 'col-md-1',
			 			title : 'IP6',
                                                sortField: 'ip6'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="horariotrabalho.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
     }

    return HorarioTrabalhoListController;

});