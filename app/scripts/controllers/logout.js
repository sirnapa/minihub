'use strict';

/**
 * @ngdoc function
 * @name minihubApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the minihubApp
 */
angular.module('minihubApp')
  .controller('LogoutCtrl', function($location, $auth, toastr) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        toastr.info('You have been logged out');
        $location.path('/');
      });
  });
