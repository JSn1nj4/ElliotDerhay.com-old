import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const projects = new Mongo.Collection('projects');

if(Meteor.isServer) {
  Meteor.publish('projects', function projectsPublication() {
    projects.find({});
  });
}
