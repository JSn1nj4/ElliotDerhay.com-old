import '/imports/api/projectsmanager.js';
import { projects } from '/imports/api/projects';
Template.ManagerContent.onCreated(function managerOnCreated() {
  Meteor.subscribe('projects');
});
