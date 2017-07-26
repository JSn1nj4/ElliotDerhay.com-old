import SimpleSchema from 'simpl-schema';
import { projects } from '/imports/api/projects.js';
import { ProjectSchemas } from './schemas/projects.js';

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

    projects.attachSchema(ProjectSchemas.NewProject);
    projects.insert({
      name: 'new project', // Can't have an empty string unfortunately
      url: 'http://example.com/username/project', // Same as above
      isSource: true,
      author: {
        user: 'username',
        url: 'http://example.com/username'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    });
    //@TODO: Send error/success messages for use on frontend
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

    let idContext = new SimpleSchema({
      id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      }
    }).newContext();

    idContext.validate({ projID });
    console.log(`projID is valid: ${idContext.isValid()}`);

    // Need to come back to this, since `idContext.isValid()` is returning false
    if( projects.findOne({ _id: projID }) ) {
      projects.remove({ _id: projID });
    }
    //@TODO: send error and success message
    //  Note: depends on getting above validation correct
  }
});
