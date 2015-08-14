define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/itempedidoservico/services/module');
    require('app/modules/itempedidoservico/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.itempedidoservico', ['ui.router', 'app.itempedidoservico.controllers', 'app.itempedidoservico.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('itempedidoservico.list', {
                    url: '/list',
                    templateUrl: 'app/modules/itempedidoservico/views/list.html',
                    controller: 'ItemPedidoServicoListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('itempedidoservico.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/itempedidoservico/views/form.html',
                    controller: 'ItemPedidoServicoFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/itempedidoservico/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('itempedidoservico.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/itempedidoservico/views/form.html',
                    controller: 'ItemPedidoServicoFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/itempedidoservico/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
