define([], function () {

    PedidoFormController.$inject = ['PedidoService', '$state','entity','$scope', 'populateScope','ClienteService'];

    function PedidoFormController(PedidoService, $state,entity,$scope,populateScope,ClienteService) {
        $scope.entity = angular.copy(entity.data);
       $scope.continue = {};
       populateScope($scope, PedidoService, 'Pedido', 'base-form');
      $scope.$on('afterUpdate',function(){
             $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('pedido.list');
       })
         populateScope($scope, ClienteService, 'Cliente', 'many-to-one');

        $scope.entity.enderecoDeEntrega = $scope.entity.enderecoDeEntrega || {};
        $scope.entity.produtos = $scope.entity.produtos  || [];

        $scope.entity.servicos = $scope.entity.servicos  || [];

    }

    return PedidoFormController;
});
