define(['app'], function(app){
  app.controller('Menu', ['$scope', 'SiteContent',

    function($scope, SiteContent){
      $scope.items = SiteContent.items;

      $scope.header = SiteContent.header.title;
      $scope.headerList = SiteContent.header.bullets;
      $scope.logoUrl = SiteContent.header.img;
    }

  ]);
});
