import '/imports/api/projectsmanager.js';
Template.ManagerContent.onCreated(function managerOnCreated() {
  Meteor.subscribe('projects');
});

Template.ManagerContent.events({
  'click #logout': (event) => {
    Meteor.logout();
  }
});
