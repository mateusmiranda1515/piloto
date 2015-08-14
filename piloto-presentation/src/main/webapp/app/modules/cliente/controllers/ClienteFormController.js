define([], function () {

    ClienteFormController.$inject = ['ClienteService', '$state','entity','$scope', 'populateScope'];

    function ClienteFormController(ClienteService, $state,entity,$scope,populateScope) {
        $scope.entity = angular.copy(entity.data);
       $scope.continue = {};
       populateScope($scope, ClienteService, 'Cliente', 'base-form');
      $scope.$on('afterUpdate',function(){
             $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('cliente.list');
       })
        $scope.entity.endereco = $scope.entity.endereco || {};
    }

    return ClienteFormController;
});
