requirejs.config({
  baseUrl:'lib',
  paths:{
    src: '../src',
    jquery:'jquery/dist/jquery',
    angular: 'angular/angular',
    app: '../src/app',
    controllers:'../src/controllers',
    directives:'../src/directives',
    factories:'../src/factories'
  },
  shim:{
    'angular': {
      exports: 'angular'
    }
  },
  deps:['angular','jquery']
});

require(['src/main']);
