import simpleIcons from 'simple-icons';
import SimpleSchema from 'simpl-schema';

Meteor.methods({
  getIcon({ names }) {

    let iconContext = new SimpleSchema({
      name: String
    }).newContext();

    let icons = names.map((name, i) => {
      iconContext.validate({ name });

      let isValid = iconContext.isValid();
      if(!isValid) {
        throw new Meteor.error('Invalid icon name format');
      }

      let icon = { svg: simpleIcons[name] };
      if(!icon.svg || icon.svg === '') {
        icon.error = 'Icon not found';
      }
      
      console.log(icon);
      return icon;
    });

    return icons;
  }
});
