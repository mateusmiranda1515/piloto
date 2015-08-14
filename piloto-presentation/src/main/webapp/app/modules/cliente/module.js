define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/cliente/services/module');
    require('app/modules/cliente/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.cliente', ['ui.router', 'app.cliente.controllers', 'app.cliente.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('cliente.list', {
                    url: '/list',
                    templateUrl: 'app/modules/cliente/views/list.html',
                    controller: 'ClienteListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('cliente.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/cliente/views/form.html',
                    controller: 'ClienteFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/cliente/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('cliente.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/cliente/views/form.html',
                    controller: 'ClienteFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/cliente/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
