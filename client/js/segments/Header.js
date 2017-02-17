import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Header.helpers({
  route: function() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  },
  pathFor(routeName) {
    return FlowRouter.path(routeName);
  }
});

console.log(FlowRouter);
