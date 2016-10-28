'use strict';

/**
 * @ngdoc function
 * @name minihubApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the minihubApp
 */
angular.module('minihubApp')
  .controller('NavbarCtrl', function($scope, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });
