define([], function () {

    FuncionarioFormController.$inject = ['FuncionarioService', '$state','entity','$scope', 'populateScope','ServicoService','HorarioTrabalhoService'];

    function FuncionarioFormController(FuncionarioService, $state,entity,$scope,populateScope,ServicoService,HorarioTrabalhoService) {
        $scope.entity = angular.copy(entity.data);
        $scope.continue = {};
        populateScope($scope, FuncionarioService, 'Funcionario', 'base-form');
        $scope.$on('afterUpdate',function(){
               $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('funcionario.list');
         })
        $scope.entity.endereco = $scope.entity.endereco || {};
        $scope.entity.capacidades = $scope.entity.capacidades  || [];

        populateScope($scope, ServicoService, 'Servico', 'many-to-many');
        populateScope($scope, ServicoService, 'Servico', 'base-list');
        $scope.$on('afterSave', function (){
           $scope.servicoGet();
        });
        $scope.entity.horarios = $scope.entity.horarios  || [];

        populateScope($scope, HorarioTrabalhoService, 'HorarioTrabalho', 'many-to-many');
        populateScope($scope, HorarioTrabalhoService, 'HorarioTrabalho', 'base-list');
        $scope.$on('afterSave', function (){
           $scope.horariotrabalhoGet();
        });
    }

    return FuncionarioFormController;
});
