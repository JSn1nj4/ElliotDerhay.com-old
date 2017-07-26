import '/imports/api/projectsmanager.js';
import { projects } from '/imports/api/projects';

Template.ManagerContent.onCreated(function managerOnCreated() {
  this.username = new ReactiveVar( Meteor.user().username );
  Meteor.subscribe('projects');
});

Template.ManagerContent.events({
  // eslint-disable-next-line no-unused-vars
  'click #logout'(e) { // the 'event' param may be necessary later
    Meteor.logout();
  },
  // eslint-disable-next-line no-unused-vars
  'click #newProjectBtn'(e) {
    Meteor.call('addProject', {}, (err, result)=>{
      // Need to accept and use error/success message
    });
  },
  'submit .project-listing'(e) {
    e.preventDefault();
    console.log(`this: ${this._id}`);
  },
  // eslint-disable-next-line no-unused-vars
  'click .delete-btn'(e) {
    let projID = this._id;
    Meteor.call('deleteProject', { projID }, (err, result)=>{
      // Need to accept and use error/success message
    });
  }
});

Template.ManagerContent.helpers({
  getProjectsList() {
    return projects.find({}, { sort: { createdAt: -1} } ).fetch();
  },
  isFalse(isSource) {
    return !isSource ? 'selected' : '';
  }
});
