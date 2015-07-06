(function() {
    'use strict';

    angular
        .module('ngBoilerplateApp.main')
        .config(MainConfig);

    MainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainConfig ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /
        $urlRouterProvider.when('', '/');
        $stateProvider
            .state('app.main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainController as mc'
            });
    }
})();
