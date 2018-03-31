import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { ReactiveVar } from 'meteor/reactive-var';
import './Header.html';

Template.Header.onCreated(function headerOnCreated() {
  this.openMobileMenu = new ReactiveVar(false);
});

Template.Header.events({
  'change input[name="mobile_menu_toggle"]'(e, tpl) {
    tpl.openMobileMenu.set(tpl.openMobileMenu.get() ? false : true);
    console.log(tpl.openMobileMenu.get());
  }
});

Template.Header.helpers({
  route: function() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  },
  toggleState() {
    return Template.instance().openMobileMenu.get() ? 'open' : 'closed';
  }
});
