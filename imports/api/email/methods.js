import { EmailSchema } from './schemas.js';

Meteor.methods({
  sendEmail({ formData }) {
    let emailContext = EmailSchema.newContext();

    // emailContext.validate({ ...formData });

    console.log(formData);
  }
});
