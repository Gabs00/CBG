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
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url:'/home',
          templateUrl:'partials/home.html'
        })
        .state('about', {
          url:'/about',
          templateUrl:'partials/about.html'
        })
        .state('services', {
          url:'/services',
          templateUrl:'partials/services.html'
        })
        .state('contact', {
          url:'/contact',
          templateUrl: 'partials/contact.html'
        });
    });

    return app;
  }
);
