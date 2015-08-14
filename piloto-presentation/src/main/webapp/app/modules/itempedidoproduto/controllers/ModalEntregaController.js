define([], function () {

    EntregaModalController.$inject = ['ItemPedidoProdutoService', '$state','$modalInstance','entity','$scope','populateScope'];

    function EntregaModalController(ItemPedidoProdutoService, $state,$modalInstance,entity,$scope,populateScope) {
		entity = entity || {};
             $scope.entity = angular.copy(entity)
		$scope.ok = function (obj) {
			$modalInstance.close(obj);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	}
	return EntregaModalController;
})

