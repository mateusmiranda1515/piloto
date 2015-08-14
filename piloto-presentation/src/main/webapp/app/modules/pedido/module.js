define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/pedido/services/module');
    require('app/modules/pedido/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.pedido', ['ui.router', 'app.pedido.controllers', 'app.pedido.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('pedido.list', {
                    url: '/list',
                    templateUrl: 'app/modules/pedido/views/list.html',
                    controller: 'PedidoListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('pedido.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/pedido/views/form.html',
                    controller: 'PedidoFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/pedido/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('pedido.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/pedido/views/form.html',
                    controller: 'PedidoFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/pedido/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
