//import { Accounts } from 'meteor/accounts-base';
import { projects } from '/imports/api/projects.js';
import './imports/methods.js';

// @TODO: Remove the following startup code before first release
// Meteor.startup(function() {
//   Accounts.setPassword( Meteor.users.find({username: 'JSn1nj4'}).fetch()[0]._id, '@FCV!x5z$%6HFcmSO%TTApWP*xQiB19@');
// });

Meteor.publish('projects', function projectsPublication() {
  return projects.find({});
});
