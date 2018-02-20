import { EmailSchema } from './schemas.js';

Meteor.methods({
  'email.send'({ formData }) {
    let emailContext = EmailSchema.newContext();

    // emailContext.validate({ ...formData });

    console.log(formData);

    return { message: 'Email sent!', formData };
  }
});
