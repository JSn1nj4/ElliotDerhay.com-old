// App JS

// Client-side routes

Router.configure({
  layoutTemplate: 'PageLayout',
  yieldTemplates: {
    'Footer': {to: 'Footer'},
    'Header': {to: 'Header'}
  }
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/about');
