define([], function () {

    MarcaFormController.$inject = ['MarcaService', '$state','entity','$scope', 'populateScope'];

    function MarcaFormController(MarcaService, $state,entity,$scope,populateScope) {
        $scope.entity = angular.copy(entity.data);
       $scope.continue = {};
       populateScope($scope, MarcaService, 'Marca', 'base-form');
      $scope.$on('afterUpdate',function(){
             $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('marca.list');
       })
       
      
       
    }

    return MarcaFormController;
});
