import '/imports/api/projectsmanager.js';
import { projects } from '/imports/api/projects';

Template.ManagerContent.onCreated(function managerOnCreated() {
  Meteor.subscribe('projects');
});

Template.ManagerContent.helpers({
  getUsername() {
    return Meteor.user().username;
  }
});

Template.ManagerContent.events({
  // eslint-disable-next-line no-unused-vars
  'click #logout': (event) => { // the 'event' param may be necessary later
    Meteor.logout();
  }
});

Template.ManagerContent.helpers({
  getProjectsList() {
    return projects.find({}, { sort: { createdAt: -1} } ).fetch();
  }
});
