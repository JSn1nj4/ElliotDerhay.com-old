import { ReactiveVar } from 'meteor/reactive-var';
import { projects } from '/imports/api/projects/projects.js';
import '../components/StatusMessage.js';
import '../components/SingleProjectEntry.js';
import './ManagerContent.html';

Template.ManagerContent.onCreated(function managerOnCreated() {
  this.username = new ReactiveVar( Meteor.user().username );
  this.msgObj = new ReactiveVar(); // For error/success messages

  this.showTheMsg = (text, type) => {
    // Just a reminder: `this` INSIDE this method refers to the template
    // instance. This is because arrow functions inherit `this` from their
    // parent object.

    // Set message object
    this.msgObj.set({text, type});
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
  getMessageVar() {
    return Template.instance().msgObj;
  },
  getMsgCallback() { // For passing the msgCallback method to children
    return Template.instance().msgCallback;
  }
});
