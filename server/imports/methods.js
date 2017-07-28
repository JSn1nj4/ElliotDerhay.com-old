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
      Return validated username and password for these reasons:
        1) Validated login info is more secure.
        2) The `Meteor.call()` callback won't have access to this info
            otherwise, because of how JavaScript closures work.
    */
    return {
      loginIsValid: loginContext.isValid(),
      username: username,
      password: password
    };
  },

  addProject() {
    projects.attachSchema(ProjectSchemas.NewProject);
    let newDoc = {
      name: 'new project', // Can't have an empty string unfortunately
      url: 'http://example.com/username/project', // Same as above
      isSource: true,
      author: {
        user: 'username',
        url: 'http://example.com/username'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };

    //@TODO: Send error/success messages for use on frontend
    if(projects.insert(newDoc).length >= 1) {
      return {success: 'New project document created.'};
    } else {
      return {error: 'Unable to add new project.'};
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
    projects.attachSchema(ProjectSchemas.DeleteProject);
    var removed = projects.remove({ _id: projID });

    if( removed > 1 ) {
      return {error: 'Something went wrong. Multiple documents removed.'};
    } else if ( removed !== 1) {
      return {error: 'Couldn\'t delete project: not found.'};
    } else {
      return {success: 'Project removed.'};
    }
    //@TODO: send error and success message
    //  Note: depends on getting above validation correct
  }
});
