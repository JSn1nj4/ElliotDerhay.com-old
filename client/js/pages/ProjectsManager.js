import '/imports/api/projectsmanager.js';
import { projects } from '/imports/api/projects';

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

  'submit .project-listing'(e, tpl) {
    // First things first: prevent default form submit action
    e.preventDefault();

    let formData = e.target;
    let projID = this._id;
    let projData = {
      name: formData.proj_name.value,
      url: formData.proj_url.value,
      isSource: JSON.parse( formData.isSource.value.toLowerCase() ),
      author: {
        user: formData.auth_user.value,
        url: formData.auth_url.value
      }
    };

    Meteor.call('updateProject', { projID, projData }, tpl.msgCallback);
  },

  // eslint-disable-next-line no-unused-vars
  'click .delete-btn'(e, tpl) {
    let projID = this._id;
    Meteor.call('deleteProject', { projID }, tpl.msgCallback);
  }

});

Template.ManagerContent.helpers({
  getProjectsList() {
    return projects.find({}, { sort: { createdAt: -1} } ).fetch();
  },
  checkRepoType(isSource) {
    return isSource ? 'checked' : '';
  },
  showMsg() { // check if the message should be visible
    return Template.instance().msgVisible.get();
  },
  msg() { // return the message object
    return Template.instance().msgObj.get();
  }
});
