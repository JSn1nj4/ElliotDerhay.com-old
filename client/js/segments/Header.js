import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Header.helpers({
  route: function() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  }
});

console.log(FlowRouter);
