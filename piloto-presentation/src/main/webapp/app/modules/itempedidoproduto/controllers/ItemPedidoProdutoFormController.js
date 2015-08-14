define([], function () {

    ItemPedidoProdutoFormController.$inject = ['ItemPedidoProdutoService', '$state','entity','$scope', 'populateScope','ProdutoService'];

    function ItemPedidoProdutoFormController(ItemPedidoProdutoService, $state,entity,$scope,populateScope,ProdutoService) {
        $scope.entity = angular.copy(entity.data);
       $scope.continue = {};
       populateScope($scope, ItemPedidoProdutoService, 'ItemPedidoProduto', 'base-form');
      $scope.$on('afterUpdate',function(){
             $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('itempedidoproduto.list');
       })
         populateScope($scope, ProdutoService, 'Produto', 'many-to-one');

        $scope.entity.entregas = $scope.entity.entregas  || [];

    }

    return ItemPedidoProdutoFormController;
});
