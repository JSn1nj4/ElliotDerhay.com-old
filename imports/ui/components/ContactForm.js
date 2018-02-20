import { ReactiveVar } from 'meteor/reactive-var';
import './StatusMessage.js';
import './ContactForm.html';

Template.ContactForm.onCreated(function contactFormOnCreated() {
  this.currentMessage = new ReactiveVar({});
  this.messageResponse = null;

  this.setErrorMessage = text => {
    this.currentMessage.set({type: 'error', text});
  };

  if(this.data.action) {
    this.action = this.data.action; // get action method passed to contact form
  } else {
    console.log('No form action defined!');
  }

  this.setSuccessMessage = text => {
    this.currentMessage.set({type: 'success', text});
  };
});

Template.ContactForm.events({
  'submit'(e, tpl) {
    e.preventDefault();

    const form = e.target;
    const formData = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    Meteor.call('email.send', { formData }, (err, res) => {
      if(err) {
        tpl.setErrorMessage(err.message);
        return;
      }

      tpl.setSuccessMessage(res);
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
