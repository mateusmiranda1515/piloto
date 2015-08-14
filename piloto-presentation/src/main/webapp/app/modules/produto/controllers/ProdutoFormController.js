define([], function () {

    ProdutoFormController.$inject = ['ProdutoService', '$state','entity','$scope', 'populateScope','MarcaService'];

    function ProdutoFormController(ProdutoService, $state,entity,$scope,populateScope,MarcaService) {
        $scope.entity = angular.copy(entity.data);
       $scope.continue = {};
       populateScope($scope, ProdutoService, 'Produto', 'base-form');
      $scope.$on('afterUpdate',function(){
             $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('produto.list');
       })
         populateScope($scope, MarcaService, 'Marca', 'many-to-one');

    }

    return ProdutoFormController;
});
