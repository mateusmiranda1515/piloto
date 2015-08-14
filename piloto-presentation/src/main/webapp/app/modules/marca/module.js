define(function (require) {

    var angular = require('angular');
    require('angular-ui-router');
    require('app/modules/marca/services/module');
    require('app/modules/marca/controllers/module');
    var APILocation = require('app/apiLocations');

    angular.module('app.marca', ['ui.router', 'app.marca.controllers', 'app.marca.services', 'gumga.core'])
        .config(function ($stateProvider, $httpProvider, $populateProvider) {
            $stateProvider
                .state('marca.list', {
                    url: '/list',
                    templateUrl: 'app/modules/marca/views/list.html',
                    controller: 'MarcaListController',
                    data: {
                         id: 2 
                    },                    resolve:  {
                       populateScope: function(){
                         return $populateProvider.populateScope;
                       }
                     }
                })
                .state('marca.insert', {
                    url: '/insert',
                    templateUrl: 'app/modules/marca/views/form.html',
                    controller: 'MarcaFormController',
                    controllerAs: 'form',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/marca/new'
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                })
                .state('marca.edit', {
                    url: '/edit/:id',
                    templateUrl: 'app/modules/marca/views/form.html',
                    controller: 'MarcaFormController',
                    data: {                         id: 3                     },                    resolve: {
                        entity: ['$stateParams', '$http', function ($stateParams, $http) {
                            var url = APILocation.apiLocation + '/api/marca/' + $stateParams.id;
                            return $http.get(url);
                        }],
                        populateScope: function(){
                            return $populateProvider.populateScope;
                        }
                    }
                });
        })
});
