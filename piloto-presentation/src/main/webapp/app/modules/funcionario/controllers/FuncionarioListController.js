define([], function () {

    FuncionarioListController.$inject = ['$scope', 'FuncionarioService', 'populateScope' ];
    function FuncionarioListController($scope, FuncionarioService,populateScope ) {
         populateScope($scope,FuncionarioService,'Funcionario','base-list');
          $scope.conf = {
			 	columns : 'nome,email.value,telefone.value,endereco.localization,ativo.value,cpf.value,dataNascimento,horarios,action',
			 	itemsPerPage : [2,4,6,8,10],
			 	selection : 'multi',
			 	columnsConfig : [
			 		{
			 			name : 'nome',
			 			size : 'col-md-1',
			 			title : 'Nome'
			 		},{
			 			name : 'email.value',
			 			size : 'col-md-1',
			 			title : 'E-mail'
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
			 			name : 'cpf.value',
			 			size : 'col-md-1',
			 			title : 'CPF'
			 		},{
			 			name : 'dataNascimento',
			 			size : 'col-md-1',
			 			title : 'Data nascimento'
			 		},{
			 			name : 'horarios',
			 			size : 'col-md-1',
			 			title : 'Horarios'
			 		},{
			 			name : 'action',
			 			title : 'Ação:',
                                                size : 'col-md-1',
                                                content : '<button type="button" ui-sref="funcionario.edit({id: $value.id})" class="btn btn-info">Editar</button>'
			 		}
			 	]
			 };
     }

    return FuncionarioListController;

});