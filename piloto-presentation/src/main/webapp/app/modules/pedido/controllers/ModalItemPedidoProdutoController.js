define([], function () {

    ItemPedidoProdutoModalController.$inject = ['PedidoService', '$state','$modalInstance','entity','$scope','populateScope','EntregaService','ProdutoService'];

    function ItemPedidoProdutoModalController(PedidoService, $state,$modalInstance,entity,$scope,populateScope,EntregaService,ProdutoService) {
		entity = entity || {};
             $scope.entity = angular.copy(entity)
         populateScope($scope, ProdutoService, 'Produto', 'many-to-one');

        $scope.entity.entregas = $scope.entity.entregas  || [];

		$scope.ok = function (obj) {
			$modalInstance.close(obj);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	}
	return ItemPedidoProdutoModalController;
})

