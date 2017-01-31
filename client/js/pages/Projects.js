import { projects } from '../../../imports/api/projects.js';
Template.Projects.onCreated(function projectsOnCreated() {
  Meteor.subscribe('projects');
});

Template.registerHelper('CalDate', function(date) {
  return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
});

Template.Projects.helpers({
  listProjects() {
    // return all projects for the time being
    return projects.find({}, { sort: { createdAt: -1 } }).fetch();
  }
});
