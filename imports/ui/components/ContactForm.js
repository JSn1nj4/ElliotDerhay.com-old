import './ContactForm.html';
//

Template.ContactForm.onCreated(function contactFormOnCreated() {
  this.currentMessage = '';

  if(this.data.action) {
    this.action = this.data.action; // get action method passed to contact form
  } else {
    console.log('No form action defined!');
  }
});

Template.ContactForm.events({
  'submit'(e) {
    e.preventDefault();
    console.log('Form submitted!');
  }
});

Template.ContactForm.helpers({
  showMessageBox() {
    return true;
  },
  getCurrentMessage() {
    return Template.instance().currentMessage;
  }
});
