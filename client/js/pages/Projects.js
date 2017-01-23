import { Projects } from '../../../imports/api/projects.js';
Template.Projects.onCreated(function projectsOnCreated() {
  Meteor.subscribe('Projects');
});

console.log( Projects.find().fetch() );

Template.Projects.helpers({
  projects() {
    // return all projects for the time being
    return Projects.find({});
  }
});
