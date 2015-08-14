define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/funcionario/services/module');
    require('app/modules/funcionario/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.funcionario', ['ui.router', 'app.funcionario.controllers', 'app.funcionario.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('funcionario.list', {
                    url: '/list',
                    templateUrl: 'app/modules/funcionario/views/list.html',
                    controller: 'FuncionarioListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('funcionario.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/funcionario/views/form.html',
                    controller: 'FuncionarioFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/funcionario/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('funcionario.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/funcionario/views/form.html',
                    controller: 'FuncionarioFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/funcionario/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
