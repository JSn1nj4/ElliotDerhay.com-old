import SimpleSchema from 'simpl-schema';
import { projects } from '/imports/api/projects.js';
import { ProjectSchemas } from './schemas/projects.js';

function isAdminLoggedIn() { // Make sure the correct user is logged in
  if( !false ){
    throw new Meteor.Error('Not authorized!');
  } else {
    return true;
  }
}

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
    isAdminLoggedIn();
    projects.attachSchema(ProjectSchemas.Project);
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

  updateProject({ projID, projData }) {
    isAdminLoggedIn();
    projects.attachSchema(ProjectSchemas.Project);
    ProjectSchemas.Project.clean(projData); // remove extra data that doesn't belong

    let update = projects.update(
      { _id: projID }, // Find the correct project to udpate
      {
        $set: {
          name: projData.name,
          url: projData.url,
          isSource: projData.isSource,
          author: {
            user: projData.author.user,
            url: projData.author.url
          },
          updatedAt: new Date()
        }
      }
    );

    // `update` is expected to be a number on a successful update
    //@TODO: Make sure a docs affected number is all I should expect
    if(update < 1 || update > 1) {
      console.log(`projData:\n\t${JSON.stringify(projData)}`);
      return { error: 'Something went wrong. Unable to update project.' };
    } else if(update == 1) {
      return { success: 'Project updated.'};
    }
  },

  deleteProject({ projID }) {
    isAdminLoggedIn();
    projects.attachSchema(ProjectSchemas.ExactId);
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
