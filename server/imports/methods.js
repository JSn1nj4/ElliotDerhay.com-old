import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.methods({
  adminLogin({ username, password }) {
    new SimpleSchema({
      username: { type: String },
      password: { type: String }
    }).validate({ username, password });

    return {testMsg: 'Login params validated'};
  }
});
