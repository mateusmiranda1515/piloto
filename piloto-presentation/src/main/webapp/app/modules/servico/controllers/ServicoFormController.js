define([], function () {

    ServicoFormController.$inject = ['ServicoService', '$state','entity','$scope', 'populateScope'];

    function ServicoFormController(ServicoService, $state,entity,$scope,populateScope) {
        $scope.entity = angular.copy(entity.data);
       $scope.continue = {};
       populateScope($scope, ServicoService, 'Servico', 'base-form');
      $scope.$on('afterUpdate',function(){
             $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('servico.list');
       })
    }

    return ServicoFormController;
});
