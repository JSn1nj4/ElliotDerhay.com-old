import { ReactiveVar } from 'meteor/reactive-var';
import './LoginPage.html';

Template.LoginPage.onCreated(function() { // arrow function broke context :'(
  // Setup a reactive var for dealing with login messages
  this.loginError = new ReactiveVar(''); // empty initially
});

Template.LoginPage.helpers({
  getLoginError() { // simply returns the value of the 'loginError' reactive var
    return Template.instance().loginError.get();
  }
});

Template.LoginPage.events({
  'submit #login_form': (e, tpl) => { // second param is short for template

    /* Data prep
        1. Prevent default form submit action
        2. Grab username and password string values
        3. Check that values aren't empty
        4. Reset the form if value check passes */
    e.preventDefault();
    tpl.loginError.set('');
    let username = String(e.target.username.value);
    let password = String(e.target.password.value);
    if( username.length === 0 || password.length === 0) {
      /* @TODO: Setup decent error handling library */
      tpl.loginError.set('Both login fields are required');
      return false; // Exit error handler if either login field is blank
    }
    e.target.reset();

    Meteor.call('adminLogin', {username, password}, (err, result)=>{
      if(err) {
        tpl.loginError.set(`Login validation error: ${err}`); // @TODO: Replace with generic login failure message
      } else if(result.loginIsValid) {
        Meteor.loginWithPassword(result.username, result.password, (error)=>{
          if(error) {
            tpl.loginError.set(`Login error: ${error}`); // @TODO: Replace with generic login failure message
          } else {
            tpl.loginError.set('');
          }
        });

      } else {
        tpl.loginError.set('Login info validation failed'); // @TODO: Replace with generic login failure message
      }
    });

    username = null;
    password = null;
  }
});