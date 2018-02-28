import { EmailSchema } from './schemas.js';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'email.send.contact'({ formData, getValidation = false }) {
    let emailContext = EmailSchema.newContext();

    emailContext.validate({ ...formData });

    if(!emailContext.isValid()) {
      throw new Meteor.Error('validation-error', 'Form data is invalid.');
    }
    
    let message = 'Email sent!';
    return getValidation ? { message, validation: emailContext.isValid() } : message;
  },

  'email.send.password-reset'({ email }) {
    //
  },

  'email.send.login-notification'({ username }) {
    //
  }
});
