define([], function () {

    ItemPedidoServicoModalController.$inject = ['PedidoService', '$state','$modalInstance','entity','$scope','populateScope','ServicoService'];

    function ItemPedidoServicoModalController(PedidoService, $state,$modalInstance,entity,$scope,populateScope,ServicoService) {
		entity = entity || {};
             $scope.entity = angular.copy(entity)
         populateScope($scope, ServicoService, 'Servico', 'many-to-one');

		$scope.ok = function (obj) {
			$modalInstance.close(obj);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	}
	return ItemPedidoServicoModalController;
})

