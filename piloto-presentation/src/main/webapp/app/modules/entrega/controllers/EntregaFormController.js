define([], function () {

    EntregaFormController.$inject = ['EntregaService', '$state', 'entity', '$scope', 'populateScope'];

    function EntregaFormController(EntregaService, $state, entity, $scope, populateScope) {
        $scope.entity = angular.copy(entity.data);
        $scope.continue = {};
        populateScope($scope, EntregaService, 'Entrega', 'base-form');
        $scope.entity.id && $scope.entity.quando ? $scope.entity.quando = new Date($scope.entity.quando) : angular.noop;
        $scope.$on('afterUpdate', function () {
            $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('entrega.list');
        })
        $scope.entity.endereco = $scope.entity.endereco || {};
    }

    return EntregaFormController;
});
