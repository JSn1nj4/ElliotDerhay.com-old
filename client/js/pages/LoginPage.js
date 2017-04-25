Template.LoginPage.events({
  'submit #login_form': (e) => {
    e.preventDefault();
    let username = String(e.target.username.value);
    let password = String(e.target.password.value);
    e.target.reset();

    Meteor.call('adminLogin', {username, password}, (err, result)=>{
      if(err) {
        // @TODO: Look into modifying this line, in case sensitive info can leak
        console.log(`Login validation error: ${err}`); // eslint-disable-line
      } else if(result.loginIsValid) {
        //
        Meteor.loginWithPassword(result.username, result.password, (error)=>{
          if(error) {
            // @TODO: Look into modifying this line, in case sensitive info can leak
            console.log(`Login error: ${error}`); // eslint-disable-line
          }
        });

      } else {
        // @TODO: Add some control to display a "login failure" message
        console.log('Login info validation failed'); // eslint-disable-line
      }
    });

    username = null;
    password = null;
  }
});
