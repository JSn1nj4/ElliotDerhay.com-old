import { EmailSchema } from './schemas.js';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'email.send'({ formData }) {
    let emailContext = EmailSchema.newContext();

    emailContext.validate({ ...formData });

    if(!emailContext.isValid()) {
      throw new Meteor.Error('validation-error', 'Form data is invalid.');
    }

    return 'Email sent!';
  }
});
