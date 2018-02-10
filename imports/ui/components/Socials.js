import { Meteor } from 'meteor/meteor';
import { iconCollection } from '/imports/api/socials/socials.js';
import './Socials.html';

Template.Socials.onCreated(function socialsOnCreated(){
  Meteor.subscribe('iconCollection');

  // console.log(Meteor.call(''));
  this.icons = { // @TODO: set later using Meteor method
    github: 'github',
    gitlab: 'gitlab',
    twitter: 'twitter'
  };
});

Template.Socials.helpers({
  getSocialIcon(name) {
    return Template.instance().icons[name];
  }
});
