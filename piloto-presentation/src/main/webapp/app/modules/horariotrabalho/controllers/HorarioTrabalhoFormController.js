define([], function () {

    HorarioTrabalhoFormController.$inject = ['HorarioTrabalhoService', '$state','entity','$scope', 'populateScope'];

    function HorarioTrabalhoFormController(HorarioTrabalhoService, $state,entity,$scope,populateScope) {
        $scope.valueDiaDaSemana = HorarioTrabalhoService.valueDiaDaSemana;
        $scope.entity = angular.copy(entity.data);
       $scope.continue = {};
       populateScope($scope, HorarioTrabalhoService, 'HorarioTrabalho', 'base-form');
      $scope.$on('afterUpdate',function(){
             $scope.continue.value ? $scope.entity = angular.copy(entity.data) : $state.go('horariotrabalho.list');
       })
         var formatDate = function (array) {
            var date = new Date();
            date.setHours(array[0]);
            date.setMinutes(array[1]);
            date.setSeconds(array[2]);
            return date;
        };
       $scope.entity.id && $scope.entity.horarioInicial ? $scope.entity.horarioInicial = {value: formatDate($scope.entity.horarioInicial.value.split(":"))} : angular.noop;  


       $scope.entity.id && $scope.entity.horarioFinal ? $scope.entity.horarioFinal = {value: formatDate($scope.entity.horarioFinal.value.split(":"))} : angular.noop;  

    }

    return HorarioTrabalhoFormController;
});
