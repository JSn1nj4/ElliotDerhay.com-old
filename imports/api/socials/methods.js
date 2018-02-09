import simpleIcons from 'simple-icons';
import SimpleSchema from 'simpl-schema';

Meteor.methods({
  getIcon({ name }) {

    let iconContext = new SimpleSchema({
      name: String
    }).newContext();

    iconContext.validate({ name });

    const isValid = iconContext.isValid();
    if(!isValid) {
      throw new Meteor.error('Invalid icon name format');
    }

    console.log(simpleIcons[name]);

    return {
      success: 'Icon found!'
    }
  }
});
