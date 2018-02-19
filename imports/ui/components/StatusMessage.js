import './StatusMessage.html'

Template.StatusMessage.onCreated(function statusMessageOnCreated() {
  this.showMsg = new ReactiveVar(false);
  this.message = this.data.messageVar;

  this.hideMessage = () => {
    this.showMsg.set(true);
    return this;
  };
  this.showMessage = () => {
    if( !this.message || this.message.get() === '') {
      return false;
    }

    this.showMsg.set(true);
    setTimeout(this.hideMessage, 2000);
    return this;
  };

  this.autorun(() => {
    if(!this.message) {
      return false;
    }

    this.showMessage();
  });
});

Template.StatusMessage.helpers({
  showMsg() {
    return Template.instance().showMsg.get();
  },
  getMessage() {
    return Template.instance().message.get();
  }
});
