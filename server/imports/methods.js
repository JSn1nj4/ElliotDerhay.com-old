import SimpleSchema from 'simpl-schema';

Meteor.methods({
  adminLogin({ username, password }) {

    let loginContext = new SimpleSchema({
      username: String,
      password: String
    }).newContext();

    loginContext.validate({ username, password });

    /*
      Return validated username and password
      Reason(s):
        1) Better the validated values are used for logging in than the
            unvalidated values -- which could pose a security risk if login
            happens anyway for some reason.
        2) Original username and password vars are inaccessible with
            `Meteor.loginWithPassword()` being called from inside a callback
            function. At least now the method will have access to the values
            via the result object.
    */
    return {
      loginIsValid: loginContext.isValid(),
      username: username,
      password: password
    };
  }
});
