define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/servico/services/module');
    require('app/modules/servico/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.servico', ['ui.router', 'app.servico.controllers', 'app.servico.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('servico.list', {
                    url: '/list',
                    templateUrl: 'app/modules/servico/views/list.html',
                    controller: 'ServicoListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('servico.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/servico/views/form.html',
                    controller: 'ServicoFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/servico/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('servico.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/servico/views/form.html',
                    controller: 'ServicoFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/servico/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
