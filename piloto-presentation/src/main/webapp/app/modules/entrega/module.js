define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/entrega/services/module');
    require('app/modules/entrega/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.entrega', ['ui.router', 'app.entrega.controllers', 'app.entrega.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('entrega.list', {
                    url: '/list',
                    templateUrl: 'app/modules/entrega/views/list.html',
                    controller: 'EntregaListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('entrega.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/entrega/views/form.html',
                    controller: 'EntregaFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/entrega/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('entrega.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/entrega/views/form.html',
                    controller: 'EntregaFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/entrega/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
