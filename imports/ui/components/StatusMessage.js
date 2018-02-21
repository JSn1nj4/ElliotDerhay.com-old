import { ReactiveVar } from 'meteor/reactive-var';
import './StatusMessage.html';

Template.StatusMessage.onCreated(function statusMessageOnCreated() {
  this.messageShowing = new ReactiveVar(false);
  this.message = this.data.messageVar;

  this.hideMessage = () => {
    this.messageShowing.set(false);
    return this;
  };
  this.showMessage = () => {
    if( !this.message || this.message.get() === {}) {
      return false;
    }

    this.messageShowing.set(true);
    setTimeout(this.hideMessage, 4000);
    return this;
  };

  this.autorun(() => {
    if(!this.message || this.message === {} || this.message === '') {
      return false;
    }

    this.showMessage();
  });
});

Template.StatusMessage.helpers({
  showMsg() {
    return Template.instance().messageShowing.get();
  },
  getMessage() {
    return Template.instance().message.get();
  }
});
