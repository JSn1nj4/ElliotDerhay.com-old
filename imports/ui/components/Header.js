import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './Header.html';

Template.Header.helpers({
  route: function() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  }
});
