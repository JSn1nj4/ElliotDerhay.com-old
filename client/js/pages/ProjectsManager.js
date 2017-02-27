import '/imports/api/projectsmanager.js';
Template.ProjectsManager.onCreated(function projectsOnCreated() {
  Meteor.subscribe('projects');
});
