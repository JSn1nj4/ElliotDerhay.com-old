Template.LoginPage.events({
  'submit #login_form': (e) => {
    e.preventDefault();
    let username = String(e.target.username.value);
    let password = String(e.target.password.value);
    e.target.reset();

    Meteor.call('adminLogin', {username, password}, (err, result)=>{
      if(result.testMsg) {
        console.log( `Result: ${result.testMsg}` ); // eslint-disable-line
      }
    });

    username = undefined;
    password = undefined;
  }
});
