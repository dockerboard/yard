(function (angular) {
'use strict';

angular.module(dockerboardApp.name, dockerboardApp.dependencies)
  .config([
    '$locationProvider',
    '$urlRouterProvider',
    '$translateProvider',
    function($locationProvider, $urlRouterProvider, $translateProvider) {

      // Redirect to home view when route not found
      $urlRouterProvider.otherwise('/');

      // use the HTML5 History API
      //$locationProvider.html5Mode(true);

      // langs
      $translateProvider.useStaticFilesLoader({
        prefix: 'l10n/',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('en_US');
      $translateProvider.useLocalStorage();
    }
  ]);
})(angular);
