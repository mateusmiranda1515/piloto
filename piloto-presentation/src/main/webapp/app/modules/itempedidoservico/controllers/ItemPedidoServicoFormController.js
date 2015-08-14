define([], function () {

    ItemPedidoServicoFormController.$inject = ['ItemPedidoServicoService', '$state','entity','$scope', 'populateScope','ServicoService'];

    function ItemPedidoServicoFormController(ItemPedidoServicoService, $state,entity,$scope,populateScope,ServicoService) {
        $scope.entity = angular.copy(entity.data);
       $scope.continue = {};
       populateScope($scope, ItemPedidoServicoService, 'ItemPedidoServico', 'base-form');
      $scope.$on('afterUpdate',function(){
             $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('itempedidoservico.list');
       })
         populateScope($scope, ServicoService, 'Servico', 'many-to-one');

    }

    return ItemPedidoServicoFormController;
});
