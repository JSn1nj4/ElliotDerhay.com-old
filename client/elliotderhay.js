// App JS

// Client-side routes

Router.configure({
  layoutTemplate: 'PageLayout'
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/about');
