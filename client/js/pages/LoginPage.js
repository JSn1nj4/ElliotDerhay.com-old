Template.LoginPage.events({
  'submit #login_form': (e) => {
    e.preventDefault();
    let username = String(e.target.username.value);
    let password = String(e.target.password.value);
    e.target.reset();

    

    username = undefined;
    password = undefined;
  }
});
