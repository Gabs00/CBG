define(['app'], function(app){
  app.factory('SiteContent', [
    function(){
      var links = [
        { view:'home', text:'HOME' },
        { view:'about', text:'ABOUT' },
        { view:'services', text:'SERVICES' },
        { view:'contact', text:'CONTACT' }
      ];

      var headerItems = {
        title: 'Credit Builders Group',
        bullets: [
          'Personal Credit',
          'Credit Enhancement',
          'Business Credit'
        ],
        img:'assets/stamp.jpg'
      };
      console.log('aaa');
      return {
        items: links,
        header: headerItems
      };
    }
  ]);
});
