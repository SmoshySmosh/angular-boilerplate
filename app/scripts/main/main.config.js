(function() {
    'use strict';

    angular
        .module('ngBoilerplateApp.main')
        .config(MainConfig);

    /* @ngInject */
    function MainConfig ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /
        $urlRouterProvider.when('', '/');
        $stateProvider
            .state('app.main', {
                url: '/',
                templateUrl: 'main/main.html',
                controller: 'MainController as mc'
            });
    }
})();
