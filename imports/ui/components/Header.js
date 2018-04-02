import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { ReactiveVar } from 'meteor/reactive-var';
import './Header.html';

Template.Header.onCreated(function headerOnCreated() {
  this.openMobileMenu = new ReactiveVar(false);
  this.mobileMenuHeight = new ReactiveVar();
  this.menuItems = [
    'Home',
    'Projects',
    'Experiments',
    'Contact'
  ];
  let screenWidthThreshold = 768;

  this.checkWindowWidth = () => {
    if(window.innerWidth >= screenWidthThreshold) {
      this.openMobileMenu.set(false);
      this.mobileMenuHeight.set('');
    }

    if(window.innerWidth < screenWidthThreshold) {
      this.mobileMenuHeight.set(`height:${this.menuItems.length * 50}px;`);
    }
  };

  window.addEventListener('resize', this.checkWindowWidth);
  this.checkWindowWidth();
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
  mobileMenuHeight() {
    return Template.instance().openMobileMenu.get() ? Template.instance().mobileMenuHeight.get() : '';
  }
});
