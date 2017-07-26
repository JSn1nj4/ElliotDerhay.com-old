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
    Meteor.call('addProject');
  },
  'submit .project-listing'(e) {
    e.preventDefault();
    console.log(`this: ${this._id}`);
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
