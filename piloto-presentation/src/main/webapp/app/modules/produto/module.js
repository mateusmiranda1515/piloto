define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/produto/services/module');
    require('app/modules/produto/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.produto', ['ui.router', 'app.produto.controllers', 'app.produto.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('produto.list', {
                    url: '/list',
                    templateUrl: 'app/modules/produto/views/list.html',
                    controller: 'ProdutoListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('produto.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/produto/views/form.html',
                    controller: 'ProdutoFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/produto/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('produto.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/produto/views/form.html',
                    controller: 'ProdutoFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/produto/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
