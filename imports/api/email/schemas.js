import SimpleSchema from 'simpl-schema';

export const EmailSchema = new SimpleSchema({
  firstname: {
    type: String,
    max: 50
  },
  lastname: {
    type: String,
    max: 100
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  subject: {
    type: String,
    max: 100
  },
  message: {
    type: String,
    max: 1000
  }
});
