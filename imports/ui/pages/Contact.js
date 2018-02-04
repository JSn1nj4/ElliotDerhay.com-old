import '../components/HeroImage.js';
import './Contact.html';

Template.Contact.onCreated(function contactOnCreated() {
  this.heroSettings = {
    id: 'contact_banner',
    content: {
      title: 'GET IN TOUCH',
      tagline: 'Lorem ipsum dolor sit amet, mea no movet scaevola assueverit, pro ferri choro maiestatis in'
    },
    layout: '12,4',
    contentColumn: 1
  };
});

Template.Contact.helpers({
  getHeroSettings() {
    return Template.instance().heroSettings;
  }
});
