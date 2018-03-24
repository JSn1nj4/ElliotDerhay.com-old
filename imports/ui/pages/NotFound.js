import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { ReactiveVar } from 'meteor/reactive-var';
import './NotFound.html';

Template.NotFound.onCreated(function notFoundOnCreated() {
  this.redirectTime = new ReactiveVar(5);
  this.beginCountdown = () => {
    var intervalID = setInterval(() => {
      let redirectTime = this.redirectTime.get();
      if(redirectTime === 0) {
        clearInterval(intervalID);
        FlowRouter.go('/');
        return true;
      }

      this.redirectTime.set(redirectTime - 1);
    }, 1000);
  };
});

Template.NotFound.onRendered(function notFoundOnRendered() {
  this.beginCountdown();
});

Template.NotFound.helpers({
  redirectTime() {
    return Template.instance().redirectTime.get();
  }
});
