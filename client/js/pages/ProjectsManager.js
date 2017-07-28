import '/imports/api/projectsmanager.js';
import { projects } from '/imports/api/projects';

Template.ManagerContent.onCreated(function managerOnCreated() {
  this.username = new ReactiveVar( Meteor.user().username );
  this.msgObj = new ReactiveVar({}); // For error/success messages
  this.msgVisible = new ReactiveVar(false); // Whether to show the message box
  this.showTheMsg = (txt, type) => {
    console.log({
      txt: txt,
      type: type
    });
    // Show message, using a vanilla JS timeout
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
    Meteor.call('addProject', {}, (err, result)=>{
      // Need to accept and use error/success message
      if(err) {
        tpl.showTheMsg(err);
      } else if(result.error) {
        tpl.showTheMsg(result.error, 'error');
      } else if(result.success) {
        tpl.showTheMsg(result.success, 'success');
      } else {
        tpl.showTheMsg('Unknown error.', 'error');
      }
    });
  },

  'submit .project-listing'(e) {
    e.preventDefault();
    console.log(`this: ${this._id}`);
  },

  // eslint-disable-next-line no-unused-vars
  'click .delete-btn'(e, tpl) {
    let projID = this._id;
    Meteor.call('deleteProject', { projID }, (err, result)=>{
      // Need to accept and use error/success message
      if(err) {
        tpl.showTheMsg(err);
      } else if(result.error) {
        tpl.showTheMsg(result.error, 'error');
      } else if(result.success) {
        tpl.showTheMsg(result.success, 'success');
      } else {
        tpl.showTheMsg('Unknown error.', 'error');
      }
    });
  }

});

Template.ManagerContent.helpers({
  getProjectsList() {
    return projects.find({}, { sort: { createdAt: -1} } ).fetch();
  },
  isFalse(isSource) {
    return !isSource ? 'selected' : '';
  },
  showMsg() { // check if the message should be visible
    return Template.instance().msgVisible.get();
  },
  msg() { // return the message object
    return Template.instance().msgObj.get();
  }
});
