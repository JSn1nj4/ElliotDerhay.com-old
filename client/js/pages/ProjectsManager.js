import '/imports/api/projectsmanager.js';
import { projects } from '/imports/api/projects';

Template.ManagerContent.onCreated(function managerOnCreated() {
  Meteor.subscribe('projects');
});

Template.ManagerContent.helpers({
  getProjectsList() {
    return projects.find({}, { sort: { createdAt: -1} } ).fetch();
  }
});
