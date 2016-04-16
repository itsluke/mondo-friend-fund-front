'use strict';

/**
 * @ngdoc overview
 * @name FriendFund
 * @description
 * # FriendFund
 *
 * Main module of the application.
 */
angular
  .module('friendFund', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sign-in', {
        templateUrl: 'views/signin.html',
        controller: 'SignInCtrl',
        controllerAs: 'SignIn'
      })
      .when('/sign-up', {
        templateUrl: 'views/signup.html',
        controller: 'RegisterCtrl',
        controllerAs: 'Register'
      })
      .when('/group', {
        templateUrl: 'views/group/main.html',
        controller: 'GroupCtrl',
        controllerAs: 'Group'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
