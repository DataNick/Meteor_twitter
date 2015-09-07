 Router.configure ({ // define the layout
  layoutTemplate: 'layout'
});

// map all of the URLs
Router.map(function(){
  //Posts route
  this.route('posts', {
      path: '/',
      template: 'posts'
  });

  // About route
  this.route('about');

  //Profile route
  this.route('profile');
});