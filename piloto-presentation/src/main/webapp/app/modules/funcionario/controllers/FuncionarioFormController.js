define([], function () {

    FuncionarioFormController.$inject = ['FuncionarioService', '$state', 'entity', '$scope', 'populateScope', 'ServicoService', 'HorarioTrabalhoService'];

    function FuncionarioFormController(FuncionarioService, $state, entity, $scope, populateScope, ServicoService, HorarioTrabalhoService) {
        $scope.entity = angular.copy(entity.data);
        $scope.continue = {};
        populateScope($scope, FuncionarioService, 'Funcionario', 'base-form');
        
        var formatDate = function (array) {
            var date = new Date();
            date.setHours(array[0]);
            date.setMinutes(array[1]);
            date.setSeconds(array[2]);
            return date;
        };
        
        $scope.$on('beforeUpdate', function () {
            $scope.entity.horarios = $scope.entity.horarios.map(function (data){
                data.horarioInicial = {value: formatDate(data.horarioInicial.value.split(":"))}
                data.horarioFinal = {value: formatDate(data.horarioFinal.value.split(":"))}
                return data;
            });
        });
        
        $scope.$on('afterUpdate', function () {
            $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('funcionario.list');
        })
        
        $scope.entity.endereco = $scope.entity.endereco || {};
        $scope.entity.capacidades = $scope.entity.capacidades || [];

        populateScope($scope, ServicoService, 'Servico', 'many-to-many');
        populateScope($scope, ServicoService, 'Servico', 'base-list');
        $scope.$on('afterSave', function () {
            $scope.servicoGet();
        });
        $scope.entity.horarios = $scope.entity.horarios || [];
        $scope.entity.id && $scope.entity.dataNascimento ? $scope.entity.dataNascimento = new Date($scope.entity.dataNascimento) : angular.noop;
        populateScope($scope, HorarioTrabalhoService, 'HorarioTrabalho', 'many-to-many');
        populateScope($scope, HorarioTrabalhoService, 'HorarioTrabalho', 'base-list');
        $scope.$on('afterSave', function () {
            $scope.horariotrabalhoGet();
        });
    }

    return FuncionarioFormController;
});
