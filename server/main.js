import { projects } from '/imports/api/projects.js';

Meteor.publish('projects', function projectsPublication() {
  return projects.find({});
});
