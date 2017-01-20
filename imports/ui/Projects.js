import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Projects } from '../api/projects.js';

import './Project.html';

Template.Projects.onCreated(function projectsOnCreated() {
  Meteor.subscribe('Projects');
});
