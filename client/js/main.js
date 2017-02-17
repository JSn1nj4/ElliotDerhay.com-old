import '../../imports/ui/body.js';
// App JS

// Client-side routes

/*Router.configure({
  layoutTemplate: 'PageLayout',
  yieldTemplates: {
    'Footer': {to: 'Footer'},
    'Header': {to: 'Header'}
  }
});

// Route name = "name" in <template> element
Router.route('/', {
  name: 'Home'
});
Router.route('/projects', {
  name: 'Projects',
  template: 'ComingSoon'
});
Router.route('/contact', {
  name: 'Contact',
  template: 'ComingSoon'
});*/

FlowRouter.route('/', {
  name: 'Home'
});
