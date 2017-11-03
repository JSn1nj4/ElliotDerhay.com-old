import { projects } from '/imports/api/projects';
import '/imports/api/projectsmanager.js';
import '../components/SingleProjectEntry.js';
import './ManagerContent.html';

Template.ManagerContent.onCreated(function managerOnCreated() {
  this.username = new ReactiveVar( Meteor.user().username );
  this.msgObj = new ReactiveVar({}); // For error/success messages
  this.msgVisible = new ReactiveVar(false); // Whether to show the message box
  this.showTheMsg = (txt, type) => {
    // Just a reminder: `this` INSIDE this method refers to the template instance

    // Show message, using a vanilla JS timeout
    this.msgObj.set({txt, type});
    setTimeout(() => {
      this.msgVisible.set(true);
    }, 200);
    setTimeout(() => {
      this.msgVisible.set(false);
    }, 4000);
  };

  // Generic callback method for using the `.showTheMsg()` method
  this.msgCallback = (err, result) => {
    if(err) {
      this.showTheMsg(err, 'error');
    } else if(result === undefined) {
      this.showTheMsg('No usable result returned.', 'error');
    } else if(result.error) {
      this.showTheMsg(result.error, 'error');
    } else if(result.success) {
      this.showTheMsg(result.success, 'success');
    } else {
      this.showTheMsg('Unknown error.', 'error');
    }
  };

  Meteor.subscribe('projects');
});

Template.ManagerContent.events({

  // eslint-disable-next-line no-unused-vars
  'click #logout'(e) { // the 'event' param may be necessary later
    Meteor.logout();
  },

  // eslint-disable-next-line no-unused-vars
  'click #newProjectBtn'(e, tpl) {
    Meteor.call('addProject', {}, tpl.msgCallback);
  },

});

Template.ManagerContent.helpers({
  getProjectsList() {
    return projects.find({}, { sort: { createdAt: -1} } ).fetch();
  },
  showMsg() { // check if the message should be visible
    return Template.instance().msgVisible.get();
  },
  msg() { // return the message object
    return Template.instance().msgObj.get();
  }
});
