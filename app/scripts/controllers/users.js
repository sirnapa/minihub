'use strict';

/**
 * @ngdoc function
 * @name minihubApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the minihubApp
 */
angular.module('minihubApp')
  .controller('UsersCtrl', function($scope, $http) {

      $scope.search = function() {
          $scope.users = [];
          $scope.error = '';

          $http.get("https://api.github.com/search/users?q=" + $scope.username)
            .success(function(data) {
                if(data.total_count>0){
                    $scope.users = data.items;
                }else{
                    $scope.error = "No se han encontrado resultados.";
                }
            })
            .error(function(data){
                $scope.error = data.message;
            });

      };

  });
