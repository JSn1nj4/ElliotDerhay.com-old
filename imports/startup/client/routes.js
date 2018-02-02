import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Public routes
FlowRouter.globals.push({
  waitOn() {
    return [
      import('/imports/ui/components/Header.js'),
      import('/imports/ui/components/Footer.js'),
      import('/imports/ui/pages/ComingSoon.js')
    ];
  }
});

let publicRoutes = FlowRouter.group({
  name: 'public',
  waitOn() {
    return [
      import('/imports/ui/layouts/PageLayout.js')
    ];
  }
});

publicRoutes.route('/', {
  name: 'Home',
  action() {
    import('/imports/ui/pages/Home.js').then(() => {
      BlazeLayout.render('PageLayout', {
        content: 'Home'
      });
    });
  }
});

publicRoutes.route('/projects', {
  name: 'Projects',
  action() {
    import('/imports/ui/pages/Projects.js').then(() => {
      BlazeLayout.render('PageLayout', {
        content: 'Projects'
      });
    });
  }
});

publicRoutes.route('/experiments', {
  name: 'Experiments',
  action() {
    import('/imports/ui/pages/ComingSoon.js').then(() => {
      BlazeLayout.render('PageLayout', {
        content: 'ComingSoon'
      });
    });
  }
});

publicRoutes.route('/contact', {
  name: 'Contact',
  action() {
    import('/imports/ui/pages/ComingSoon.js').then(() => {
      BlazeLayout.render('PageLayout', {
        content: 'Contact'
      });
    });
  }
});

// Private routes
FlowRouter.route('/projects/manager', {
  name: 'ProjectsManager',
  action() {
    import('/imports/ui/layouts/ManagerLayout.js').then(() => {
      BlazeLayout.render('ManagerLayout');
    });
  }
});
