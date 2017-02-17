import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Header.helpers({
  route: function() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  },
  pathFor(routeName) {
    var path = '/';
    if(routeName != 'Home') {
      path += routeName.toLowerCase();
    }
    return path;
  }
});

console.log(FlowRouter);
