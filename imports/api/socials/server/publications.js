import { Meteor } from 'meteor/meteor';
import { iconCollection } from '../socials.js';

Meteor.publish('iconCollection', function socialsPublication() {
  return iconCollection.find({});
});
