import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.methods({
  adminLogin({ username, password }) {
    let loginIsValid = new SimpleSchema({
      username: { type: String },
      password: { type: String }
    }).validate({ username, password });

    return {
      loginIsValid: loginIsValid
    };
  }
});
