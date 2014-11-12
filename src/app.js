define([
  'jquery',
  'angular',
  'lib/angular-ui-router/release/angular-ui-router.js',
  'lib/angular-bootstrap/ui-bootstrap.js',
  'lib/angular-ui-utils/ui-utils.js'

  ],
  function($, angular){
    var app = angular.module('CBG',['ui.router', 'ui.bootstrap', 'ui.utils']);

    app.config(function($stateProvider, $urlRouterProvider){

    });

    return app;
  }
);
