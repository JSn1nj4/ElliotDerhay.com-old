import SimpleSchema from 'simpl-schema';
import { projects } from '/imports/api/projects.js';
import './schemas/projects.js';

Meteor.methods({
  adminLogin({ username, password }) {

    let loginContext = new SimpleSchema({
      username: String,
      password: String
    }).newContext();

    loginContext.validate({ username, password });

    /*
      Return validated username and password
      Reason(s):
        1) Better the validated values are used for logging in than the
            unvalidated values -- which could pose a security risk if login
            happens anyway for some reason.
        2) Original username and password vars are inaccessible with
            `Meteor.loginWithPassword()` being called from inside a callback
            function. At least now the method will have access to the values
            via the result object.
    */
    return {
      loginIsValid: loginContext.isValid(),
      username: username,
      password: password
    };
  },
  addProject() {
    console.log('Project created.');

    if(true) {
      return {success: 'Project created! :)'};
    } else {
      return {error: 'Could not create project.'};
    }
  },
  updateProject({ projectData }) {
    console.log(`Project data: ${projectData}`);

    if(true) {
      return {success: 'Project updated.'};
    } else {
      return {error: 'Could not update project.', projectData: projectData};
    }
  },
  deleteProject({ projID }) {
    console.log(`Project to delete: ${projID}`);

    if(true) {
      return {success: 'Project delete. :('};
    } else {
      return {error: 'Could not delete project.', projID: projID};
    }
  }
});
