import { projects } from '/imports/api/projects/projects.js';
import './Projects.html';
Template.Projects.onCreated(function projectsOnCreated() {
  Meteor.subscribe('projects');
});

Template.Projects.helpers({
  listProjects() {
    // return all projects for the time being
    return projects.find({}, { sort: { updatedAt: -1 } }).fetch();
  }
});
