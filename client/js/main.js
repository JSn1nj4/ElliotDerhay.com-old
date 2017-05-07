import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// App JS

// Client-side routes

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

FlowRouter.route('/projects/manager', {
  name: 'Projects Manager',
  action() {
    BlazeLayout.render('ManagerLayout');
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
