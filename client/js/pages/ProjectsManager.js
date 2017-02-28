import '/imports/api/projectsmanager.js';
Template.ManagerContent.onCreated(function managerOnCreated() {
  Meteor.subscribe('projects');
});
