define(['app', 'jquery'], function(app, $){
  app.directive('cbgNav', [function(){
    return {
      templateUrl:'partials/menu.html',
      restrict:'EA',
      replace:true,
      link: function(scope, elem, attr){
      }
    };
  }]);
});
