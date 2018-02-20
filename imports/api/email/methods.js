import { EmailSchema } from './schemas.js';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'email.send'({ formData }) {
    let emailContext = EmailSchema.newContext();

    emailContext.validate({ ...formData });

    if(!emailContext.isValid()) {
      throw new Meteor.Error('invalid-data', 'Form data is of the wrong type.');
    }

    return 'Email sent!';
  }
});
