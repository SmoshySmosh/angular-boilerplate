(function() {
    'use strict';

    angular
        .module('ngBoilerplateApp')
        .config(AppConfig);

    AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function AppConfig ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /
        $urlRouterProvider.when('', '/');
        $stateProvider
            .state('app', {
                url: '',
                templateUrl: 'views/layout.html',
                controller: 'MainController as mc'
            });
    }
})();
