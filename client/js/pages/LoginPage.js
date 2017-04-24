Template.LoginPage.events({
  'submit #login_form': (e) => {
    e.preventDefault();
    let username = String(e.target.username.value);
    let password = String(e.target.password.value);
    e.target.reset();

    Meteor.call('adminLogin', {username, password}, (err, result)=>{
      if(err) {
        console.log(`Login validation error: ${err}`); // eslint-disable-line
      } else if(result.loginIsValid) {
        Meteor.loginWithPassword(username, password, (err)=>{
          if(err) {
            console.log(`Login error: ${err}`); // eslint-disable-line
          }
        });
      } else {
        console.log('Login info validation failed'); // eslint-disable-line
      }
    });

    username = undefined;
    password = undefined;
  }
});
