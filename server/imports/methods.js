Meteor.methods({
  adminLogin({username, password}) {
    return {testMsg: 'login checked'};
  }
});
