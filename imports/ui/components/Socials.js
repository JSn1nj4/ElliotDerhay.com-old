import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import './Socials.html';

Template.Socials.onCreated(function socialsOnCreated(){
  const socialIcons = new Mongo.Collection('socialIcons');
  Meteor.subscribe('socialIcons');

  let currentSocialIcons = socialIcons.find({});

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
