import { projects } from '../projects.js';
Meteor.publish('projects', function projectsPublication() {
  return projects.find({});
});
