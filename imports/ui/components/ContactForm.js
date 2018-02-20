import { ReactiveVar } from 'meteor/reactive-var';
import './StatusMessage.js';
import './ContactForm.html';

Template.ContactForm.onCreated(function contactFormOnCreated() {
  this.currentMessage = new ReactiveVar({});
  this.messageResponse = null;

  this.setMessage = msg => {
    this.currentMessage.set(msg);
  };

  if(this.data.action) {
    this.action = this.data.action; // get action method passed to contact form
  } else {
    console.log('No form action defined!');
  }

  this.setMessage({type: 'error', text: 'test'});

  this.autorun(() => {
    if(this.emailResponse) {
      this.setMessage(this.emailResponse.firstname);
      console.log(JSON.stringify(this.emailResponse));
    }
  });
});

Template.ContactForm.events({
  'submit'(e) {
    e.preventDefault();
    // Template.instance().setMessage({type: 'success', text: 'Form submitted!'});
    const form = e.target;
    const formData = {
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      subject: form.subject,
      message: form.message
    };

    Template.instance().emailResponse = Meteor.call('email.send', { formData }, (err, res) => {
      if(err) {
        console.log(err);
        return null;
      }

      console.log(res.message);
      return res.formData;
    });
  }
});

Template.ContactForm.helpers({
  getMessageVar() {
    return Template.instance().currentMessage;
  },
  showMessageBox() {
    return true;
  }
});
