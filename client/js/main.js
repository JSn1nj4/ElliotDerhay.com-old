import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// App JS

// Client-side routes
let routes = [
  {route: '/', name: 'Home', template: 'PageLayout', content: 'Home'},
  {route: '/projects', name: 'Projects', template: 'PageLayout', content: 'Projects'},
  {route: '/projects/manager', name: 'Projects Manager', template: 'ManagerLayout', content: ''},
  {route: '/contact', name: 'Contact', template: 'PageLayout', content: 'ComingSoon'},
];

routes.map(r => {
  FlowRouter.route(r.route, {
    name: r.name,
    action() {
      if(r.content && r.content.length >= 1) {
        BlazeLayout.render(r.template, {
          content: r.content
        });
      } else {
        BlazeLayout.render(r.template);
      }
    }
  });
});
