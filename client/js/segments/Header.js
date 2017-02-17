import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Header.helpers({
  route: function() {
    return FlowRouter.getRouteName();
  }
});

console.log(FlowRouter);
