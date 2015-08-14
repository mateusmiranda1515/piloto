define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/itempedidoproduto/services/module');
    require('app/modules/itempedidoproduto/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.itempedidoproduto', ['ui.router', 'app.itempedidoproduto.controllers', 'app.itempedidoproduto.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('itempedidoproduto.list', {
                    url: '/list',
                    templateUrl: 'app/modules/itempedidoproduto/views/list.html',
                    controller: 'ItemPedidoProdutoListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('itempedidoproduto.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/itempedidoproduto/views/form.html',
                    controller: 'ItemPedidoProdutoFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/itempedidoproduto/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('itempedidoproduto.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/itempedidoproduto/views/form.html',
                    controller: 'ItemPedidoProdutoFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/itempedidoproduto/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
