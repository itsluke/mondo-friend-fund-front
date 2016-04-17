'use strict';

/**
 * @ngdoc function
 * @name friendFund.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the friendFund
 */
angular.module('friendFund')
  .controller('RegisterCtrl', ['$scope', function ($scope) {

    $scope.hello = function(){
      return 'world';
    };

  }]);
