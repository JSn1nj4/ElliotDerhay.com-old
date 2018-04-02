import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { ReactiveVar } from 'meteor/reactive-var';
import './Header.html';

Template.Header.onCreated(function headerOnCreated() {
  this.openMobileMenu = new ReactiveVar(false);
  window.addEventListener('resize', () => {
  this.menuItems = [
    'Home',
    'Projects',
    'Experiments',
    'Contact'
  ];

    if(window.innerWidth >= 600) {
      this.openMobileMenu.set(false);
    }
  });
});

Template.Header.events({
  'change input[name="mobile_menu_toggle"]'(e, tpl) {
    tpl.openMobileMenu.set(tpl.openMobileMenu.get() ? false : true);
  },
  'click #main-menu a'(e, tpl) {
    tpl.openMobileMenu.set(false);
  }
});

Template.Header.helpers({
  route() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  },
  getMenuItems() {
    return Template.instance().menuItems;
  },
  mobileMenuState() {
    return Template.instance().openMobileMenu.get() ? 'open' : 'closed';
  },
  }
});
