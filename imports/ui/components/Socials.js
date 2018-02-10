import { Meteor } from 'meteor/meteor';
import { iconCollection } from '/imports/api/socials/socials.js';
import './Socials.html';

Template.Socials.onCreated(function socialsOnCreated(){
  Meteor.subscribe('iconCollection');
  this.fetchIcon = (title) => {
    return iconCollection.findOne({ title });
  };
});

Template.Socials.helpers({
  getIcon(name) {
    return Template.instance().fetchIcon(name);
  },
  getIconList(list) {
    return list.map((item) => {
      return Template.instance().fetchIcon(item.name);
    });
  }
});
