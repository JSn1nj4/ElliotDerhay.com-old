import 'meteor/reactive-var';
import './StatusMessage.js';
import './ContactForm.html';

Template.ContactForm.onCreated(function contactFormOnCreated() {
  this.currentMessage = new ReactiveVar({});

  this.setMessage = msg => {
    this.currentMessage.set(msg);
  };

  if(this.data.action) {
    this.action = this.data.action; // get action method passed to contact form
  } else {
    console.log('No form action defined!');
  }

  this.setMessage({type: 'success', text: 'test'});
});

Template.ContactForm.events({
  'submit'(e) {
    e.preventDefault();
    Template.instance().setMessage({type: 'success', text: 'Form submitted!'});
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
