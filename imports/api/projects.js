import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const projects = new Mongo.Collection('projects');
