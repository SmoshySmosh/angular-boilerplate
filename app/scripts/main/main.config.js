'use strict';

angular
    .module('ngBoilerplateApp.main')
    .config(['$stateProvider', '$urlRouterProvider', MainConfig]);

function MainConfig ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.when('', '/');
    $stateProvider
        .state('app.main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
}
