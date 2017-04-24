import SimpleSchema from 'simpl-schema';

Meteor.methods({
  adminLogin({ username, password }) {

    let loginContext = new SimpleSchema({
      username: String,
      password: String
    }).newContext();

    loginContext.validate({ username, password });

    return {
      loginIsValid: loginContext.isValid()
    };
  }
});
