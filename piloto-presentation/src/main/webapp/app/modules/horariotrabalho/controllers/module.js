define(function (require) {
    var angular = require('angular');
    require('app/modules/horariotrabalho/services/module');
    require('angular-ui-router');

    return angular.module('app.horariotrabalho.controllers', ['app.horariotrabalho.services','ui.router'])
        .controller('HorarioTrabalhoFormController', require('app/modules/horariotrabalho/controllers/HorarioTrabalhoFormController'))
        .controller('HorarioTrabalhoListController', require('app/modules/horariotrabalho/controllers/HorarioTrabalhoListController'))
});
