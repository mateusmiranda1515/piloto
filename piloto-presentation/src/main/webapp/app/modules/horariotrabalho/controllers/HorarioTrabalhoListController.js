define([], function () {

    HorarioTrabalhoListController.$inject = ['$scope', 'HorarioTrabalhoService', 'populateScope' ];
    function HorarioTrabalhoListController($scope, HorarioTrabalhoService,populateScope ) {

         populateScope($scope,HorarioTrabalhoService,'HorarioTrabalho','base-list');
     }

    return HorarioTrabalhoListController;

});