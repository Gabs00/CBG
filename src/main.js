//Puts everything together to be displayed on dom
//Notice no need for ng-app in html
require([
  'angular',
  'app',
  'factories',
  'controllers',
  'directives'],

  function (angular) {
    angular.bootstrap(document, ['CBG']);
  }
);
