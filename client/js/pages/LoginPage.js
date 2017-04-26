Template.LoginPage.events({
  'submit #login_form': (e) => {

    /* Data prep
        1. Prevent default form submit action
        2. Grab username and password string values
        3. Check that values aren't empty
        4. Reset the form if value check passes */
    e.preventDefault();
    let username = String(e.target.username.value);
    let password = String(e.target.password.value);
    if( username.length === 0 || password.length === 0) {
      /* @TODO: set a reactive var that can be updated from here
          Reason: This will replace the following `console.log()`, and allow setting up
          a couple of helpers that can 1) check if the message is empty and 2) display whatever
          error message is set */
      console.log('Login fields not filled in');
      return false; // Exit error handler if either login field is blank
    }
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
