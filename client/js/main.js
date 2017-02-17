import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
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
Router.route('/projects', {
  name: 'Projects',
  template: 'ComingSoon'
});
Router.route('/contact', {
  name: 'Contact',
  template: 'ComingSoon'
});*/

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('PageLayout', {
      content: 'Home'
    });
  }
});

FlowRouter.route('/projects', {
  name: 'Projects',
  action() {
    BlazeLayout.render('PageLayout', {
      content: 'Projects'
    });
  }
});

FlowRouter.route('/contact', {
  name: 'Contact',
  action() {
    BlazeLayout.render('PageLayout', {
      content: 'ComingSoon'
    });
  }
});
