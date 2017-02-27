import { projects } from '/imports/api/projects.js';
Template.ProjectsManager.onCreated(function projectsOnCreated() {
  Meteor.subscribe('projects');
});
