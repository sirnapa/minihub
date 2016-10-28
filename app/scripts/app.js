'use strict';

/**
 * @ngdoc overview
 * @name minihubApp
 * @description
 * # minihubApp
 *
 * Main module of the application.
 */
angular
  .module('minihubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'toastr',
    'ui.router',
    'satellizer'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {

      /**
     * Helper auth functions
     */
    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }];

    // var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
    //   var deferred = $q.defer();
    //
    //   if ($auth.isAuthenticated()) {
    //     deferred.resolve();
    //   } else {
    //     $location.path('/login');
    //   }
    //   return deferred.promise;
    // }];

    /**
     * App routes
     */
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',
        resolve: {
        //   loginRequired: loginRequired
        }
      })
      .state('users', {
        url: '/users',
        controller: 'UsersCtrl',
        templateUrl: 'views/users.html',
        resolve: {
        //   loginRequired: loginRequired
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      });
    $urlRouterProvider.otherwise('/');

    /**
     *  Satellizer config
     */
    $authProvider.github({
      clientId: '7572c1dd57c2465d817b',
      url: 'http://localhost:3000/auth/github',
    });
  });
