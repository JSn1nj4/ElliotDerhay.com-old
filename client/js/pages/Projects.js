import { projects } from '../../../imports/api/projects.js';
Template.Projects.onCreated(function projectsOnCreated() {
  Meteor.subscribe('projects');
});

Template.Projects.helpers({
  listProjects() {
    // return all projects for the time being
    return projects.find({}, { sort: { createdAt: -1 } }).fetch();
  }
});
