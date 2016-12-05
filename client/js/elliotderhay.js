// App JS

// Client-side routes

Router.configure({
  layoutTemplate: 'PageLayout',
  yieldTemplates: {
    'Footer': {to: 'Footer'},
    'Header': {to: 'Header'}
  }
});

Router.route('/', {name: 'Home'});
Router.route('/projects', {name: 'Projects'});
