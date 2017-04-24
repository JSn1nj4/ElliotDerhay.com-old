Template.LoginPage.events({
  'submit #login_form': (e) => {
    e.preventDefault();
    let username = String(e.target.username.value);
    let password = String(e.target.password.value);
    e.target.reset();

    Meteor.call('adminLogin', {username, password}, (err, result)=>{
      if(err) {
        console.log(`Login validation error: ${err}`);
      } else if(result.loginIsValid) {
        console.log('login valid');
        Meteor.loginWithPassword(username, password, (error)=>{
          if(error) {
            console.log(`Login error: ${error}`);
          }
        });
      } else {
        console.log('Login info validation failed');
      }
    });

    username = undefined;
    password = undefined;
  }
});
