import { Meteor } from 'meteor/meteor';
import { socialsList } from '../socials.js';

Meteor.publish('socialIcons', function socialsPublication() {
  return socialsList;
});
