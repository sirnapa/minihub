'use strict';

/**
 * @ngdoc function
 * @name minihubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minihubApp
 */
angular.module('minihubApp')
  .controller('MainCtrl', function($scope, $http, $location) {

      var searchProjects = function() {
          $scope.user = {};
          $scope.repos = [];
          $scope.error = '';

          $http.get('https://api.github.com/users/' + $scope.username)
            .success(function(data) {
                if(data.login){
                    $scope.user = data;

                    $http.get('https://api.github.com/users/' + data.login + '/repos')
                      .success(function(data) {
                          $scope.repos = data;
                      });
                }
            })
            .error(function(){
                $scope.error = 'No se han encontrado datos para el usuario ingresado';
            });

      };

      var defaultUser = $location.search().user;
      if(defaultUser){
          $scope.username = defaultUser;
          searchProjects();
      }

      $scope.search = searchProjects;

  });
