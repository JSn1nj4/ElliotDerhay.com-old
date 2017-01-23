import '../../../imports/ui/Projects.js';

Template.Projects.helpers({
  projects() {
    // return all projects for the time being
    return Projects.find({});
  },
  logProjects() { // this is a temporary helper to be sure I'm getting expected results
    var projectDocs = Projects.find({});
    projectDocs.forEach(function(projectDoc){
      console.log(projectDoc.toString());
    });
  }
});
