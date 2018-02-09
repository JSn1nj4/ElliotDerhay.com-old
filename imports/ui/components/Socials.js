import './Socials.html';

Template.Socials.onCreated(function socialsOnCreated(){
  // console.log(Meteor.call(''));
  this.icons = { // @TODO: set later using Meteor method
    github: 'github',
    twitter: 'twitter'
  };
});

Template.Socials.helpers({
  getSocialIcon(name) {
    return Template.instance().icons[name];
  }
});
