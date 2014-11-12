define([
  'jquery',
  'angular',
  'lib/angular-ui-router/release/angular-ui-router.js',
  'lib/angular-bootstrap/ui-bootstrap.js',
  'lib/bootstrap/dist/js/bootstrap.js'
  ],
  function($, angular){
    var app = angular.module('CBG',['ui.router', 'ui.bootstrap']);

    app.config(function($stateProvider, $urlRouterProvider){
      
    });

    return app;
  }
);
