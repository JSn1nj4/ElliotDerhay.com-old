// For the time being, meant to list all collections used
if(Meteor.isServer) {
  // The below line needs to be modified later to check if the collection exists already
  Projects = new Mongo.Collection('Projects');
  Meteor.publish('Projects', function(){
    return Projects.find();
  });
}
