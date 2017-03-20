Template.LoginPage.events({
  'submit #login_form': (e) => {
    e.preventDefault();
    let username = String(e.target.username.value);
    let password = String(e.target.password.value);
    console.log(`Login attempted.\nUser: '${username}'\nPassword: ${password}`);
  }
});
