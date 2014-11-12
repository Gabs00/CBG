define(['app'], function(app){
  app.directive('cbgNav', [function(){
    return {
      template:'<ui-include src="\'partials/fragments.html\'"' + 
        ' fragment="\'#navigation\'"></ui-include>',
      restrict:'EA'
    };
  }]);
});
