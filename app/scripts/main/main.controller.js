(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name ngBoilerplateApp.main.controller:MainController
     * @description
     * # MainController
     * Controller of the ngBoilerplateApp
     */
    angular
        .module('ngBoilerplateApp.main')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController ($scope) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
    }
})();
