import '/imports/api/projectsmanager.js';
Template.ManagerContent.onCreated(function managerOnCreated() {
  Meteor.subscribe('projects');
});

Template.ManagerContent.events({
  // eslint-disable-next-line no-unused-vars
  'click #logout': (event) => { // the 'event' param may be necessary later
    Meteor.logout();
  }
});
