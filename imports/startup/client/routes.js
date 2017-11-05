import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// header and footer components; these need to be imported before the layouts
import '/imports/ui/components/Header.js';
import '/imports/ui/components/Footer.js';

// layouts for use in routes
import '/imports/ui/layouts/PageLayout.html';
import '/imports/ui/layouts/ManagerLayout.html';

// pages rendered by the route
import '/imports/ui/pages/ComingSoon.html';
import '/imports/ui/pages/Home.html';
import '/imports/ui/pages/Projects.js';
import '/imports/ui/pages/LoginPage.js';
import '/imports/ui/pages/ManagerContent.js';
import '/imports/ui/pages/Contact.html';

// Client-side routes
let routes = [
  {route: '/', name: 'Home', template: 'PageLayout', content: 'Home'},
  {route: '/projects', name: 'Projects', template: 'PageLayout', content: 'Projects'},
  {route: '/projects/manager', name: 'Projects Manager', template: 'ManagerLayout', content: ''},
  {route: '/experiments', name: 'Experiments', template: 'PageLayout', content: 'ComingSoon'},
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