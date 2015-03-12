'use strict';

angular
    .module('ngBoilerplateApp')
    .config(['$stateProvider', '$urlRouterProvider', AppConfig]);

function AppConfig ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.when('', '/');
    $stateProvider
        .state('app', {
            url: '',
            templateUrl: 'views/layout.html',
            controller: 'MainCtrl'
        });
}
