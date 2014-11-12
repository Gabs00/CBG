define(['app'], function(app){
  app.factory('SiteContent', [
    function(){
      var links = [
        { view:'/home', text:'HOME' },
        { view:'/about', text:'ABOUT' },
        { view:'/services', text:'SERVICES' },
        { view:'/contact', text:'CONTACT' }
      ];
      console.log('aaa');
      return {
        items:links
      };
    }
  ]);
});
