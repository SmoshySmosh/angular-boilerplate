angular.module('ngBoilerplateApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('layout/layout.html',
    "<md-toolbar layout=\"row\"> <div class=\"md-toolbar-tools\"> <h1>Angular Boilerplate</h1> </div> </md-toolbar> <div flex layout=\"row\"> <div flex id=\"content\" layout=\"column\"> <md-content class=\"md-padding\" flex layout=\"column\" ui-view></md-content> </div> </div>"
  );


  $templateCache.put('main/main.html',
    "<div layout=\"row\"> This boilerplate is everything you need to get up and running quickly with AngularJS. </div>"
  );

}]);
