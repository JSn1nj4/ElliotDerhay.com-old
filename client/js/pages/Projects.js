import { projects } from '../../../imports/api/projects.js';
Template.Projects.onCreated(function projectsOnCreated() {
  Meteor.subscribe('projects');
});

console.log( projects.find({}).count() );

Template.Projects.helpers({
  projects() {
    // return all projects for the time being
    return projects.find({}).fetch();
  }
});
