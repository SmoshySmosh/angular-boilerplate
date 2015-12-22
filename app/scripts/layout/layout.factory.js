(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name ngBoilerplateApp.layout.service:LayoutFactory
     * @description
     * # LayoutFactory
     * Factory of the ngBoilerplateApp
     */
    angular
        .module('ngBoilerplateApp.layout')
        .factory('layout', LayoutFactory);

    /* @ngInject */
    function LayoutFactory (config, $rootScope) {
        var factory = {
            initalize: initalize,
            setTitle: setTitle,
            getTitle: getTitle
        };

        // Start layout factory
        factory.initalize();

        return factory;

        /**
         * @ngdoc method
         * @methodOf ngBoilerplateApp.layout.service:LayoutFactory
         * @name initalize
         *
         * @description
         * # initalize
         * The `initalize` method is called when the factory is loaded to populate
         * the default page title.
         */
        function initalize () {
            $rootScope.page = {};
            setTitle();
        }

        /**
         * @ngdoc method
         * @methodOf ngBoilerplateApp.layout.service:LayoutFactory
         * @name setTitle
         *
         * @description
         * # setTitle
         * The `setTitle` method is used to append your current page title on to
         * the default title of the page. This comes in handy when you want the
         * user to have up to date information about what page they are on.
         *
         * @param {String} title param
         */
        function setTitle (title) {
            // Reset title
            $rootScope.page.title = config.title;

            // Add new title to current title
            if (title) {
                $rootScope.page.title = [config.title, title].join(' - ');
            }
        }

        /**
         * @ngdoc method
         * @methodOf ngBoilerplateApp.layout.service:LayoutFactory
         * @name getTitle
         *
         * @description
         * # getTitle
         * The `getTitle` method is used to get the current page title.
         */
        function getTitle () {
            return $rootScope.page.title;
        }
    }
})();
