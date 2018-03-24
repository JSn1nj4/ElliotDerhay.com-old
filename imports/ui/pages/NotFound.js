import { ReactiveVar } from 'meteor/reactive-var';
import './NotFound.html';

Template.NotFound.onCreated(function notFoundOnCreated() {
  // this.redirectTime = new ReactiveVar(5);
  // this.beginCountdown = () => {
  //   while(this.data.redirectTime.get() > 0) {
  //     setTimeout(() => {
  //       this.data.redirectTime.set(
  //         this.data.redirectTime.get() - 1
  //       );
  //     }, 1000);
  //   }
  // };

  // this.beginCountdown();
});

Template.NotFound.helpers({
  redirectTime() {
    // return Template.instance().redirectTime.get();
  }
});
