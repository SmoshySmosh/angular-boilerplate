(function() {
    'use strict';

    angular
        .module('ngBoilerplateApp.layout')
        .config(AppConfig);

    /* @ngInject */
    function AppConfig ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /
        $urlRouterProvider.when('', '/');
        $stateProvider
            .state('app', {
                url: '',
                templateUrl: 'layout/layout.html',
                controller: 'LayoutController as lc'
            });
    }
})();
