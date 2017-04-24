import SimpleSchema from 'simpl-schema';

Meteor.methods({
  adminLogin({ username, password }) {
    console.log(`user: ${typeof username}, password: ${typeof password}`);

    let loginIsValid = new SimpleSchema({
      username: { type: String },
      password: { type: String }
    }).validate({ username, password });

    return {
      loginIsValid: loginIsValid
    };
  }
});
