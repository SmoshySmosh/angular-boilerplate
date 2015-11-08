(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name ngBoilerplateApp.core
     * @description
     * # ngBoilerplateApp.core
     *
     * Core module of the application. This module contains the core dependencies.
     */
    angular
        .module(
            'ngBoilerplateApp.core',
            [
                'ngAnimate',
                'ngAria',
                'ngCookies',
                'ngMaterial',
                'ngMessages',
                'ngResource',
                'ngSanitize',
                'ngTouch',
                'ui.router'
            ]
        );
})();
