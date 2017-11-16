import { FlowRouter } from 'meteor/kadira:flow-router';
import './Header.html';

Template.Header.helpers({
  route: function() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  }
});
