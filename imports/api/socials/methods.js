import simpleIcons from 'simple-icons';
import SimpleSchema from 'simpl-schema';
import { socialsList } from './socials.js';

Meteor.methods({
  getIconList({ icons }) {

    let iconContext = new SimpleSchema({
      name: String,
      url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
      }
    }).newContext();

    let errors = icons.map((iconObject) => {
      let name = iconObject.name;
      let url = iconObject.url;

      iconContext.validate({ name, url });

      let isValid = iconContext.isValid();
      if(!isValid) {
        console.log(`Invalid icon data:\n\tname: ${name}\n\turl: ${url}\n`);
        throw new Meteor.error('Invalid icon data');
      }

      let icon = simpleIcons[name];
      if(!icon || icon === '') {
        return `Icon not found: ${name}`;
      }

      console.log(icon);
      socialsList.push({ icon, url });
    });

    if( errors.length ) {
      return errors;
    }
  }
});
