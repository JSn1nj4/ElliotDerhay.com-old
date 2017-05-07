import { projects } from '/imports/api/projects.js';
import './imports/methods.js';

Meteor.publish('projects', function projectsPublication() {
  return projects.find({});
});
