define([], function () {

    FuncionarioListController.$inject = ['$scope', 'FuncionarioService', 'populateScope' ];
    function FuncionarioListController($scope, FuncionarioService,populateScope ) {
         populateScope($scope,FuncionarioService,'Funcionario','base-list');
     }

    return FuncionarioListController;

});