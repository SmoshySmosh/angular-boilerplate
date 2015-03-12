'use strict';

/**
 * @ngdoc function
 * @name ngBoilerplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngBoilerplateApp
 */
angular.module('ngBoilerplateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
