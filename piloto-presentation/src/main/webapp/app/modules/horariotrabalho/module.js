define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/horariotrabalho/services/module');
    require('app/modules/horariotrabalho/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.horariotrabalho', ['ui.router', 'app.horariotrabalho.controllers', 'app.horariotrabalho.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('horariotrabalho.list', {
                    url: '/list',
                    templateUrl: 'app/modules/horariotrabalho/views/list.html',
                    controller: 'HorarioTrabalhoListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('horariotrabalho.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/horariotrabalho/views/form.html',
                    controller: 'HorarioTrabalhoFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/horariotrabalho/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('horariotrabalho.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/horariotrabalho/views/form.html',
                    controller: 'HorarioTrabalhoFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/horariotrabalho/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
