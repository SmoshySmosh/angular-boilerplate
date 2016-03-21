(function() {
    /**
     * @ngdoc service
     * @name ngBoilerplateApp.config.config:Config
     * @requires $compileProvider
     * @description
     * # Config
     * Config for the application
     */
    'use strict';

    angular
        .module('ngBoilerplateApp.config')
        .config(Config);

    /* @ngInject */
    function Config (config, $compileProvider) {
        $compileProvider.debugInfoEnabled(config.environment === 'Development');
    }
})();
