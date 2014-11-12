define(['app'], function(app){
  app.controller('Menu', ['$scope', 'SiteContent',
    function($scope, SiteContent){
      $scope.items = SiteContent.items;
    }]
  );
});
