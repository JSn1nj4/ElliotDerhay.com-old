import '../components/HeroImage.js';
import '../components/Socials.js';
import '../components/ContactForm.js';
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

  this.socials = [
    { name: 'github', link: 'https://github.com/JSn1nj4' },
    { name: 'gitlab', link: 'https://gitlab.com/JSn1nj4' },
    { name: 'twitter', link: 'https://twitter.com/JSn1nj4' }
  ];
});

Template.Contact.helpers({
  getHeroSettings() {
    return Template.instance().heroSettings;
  },
  getSocials() {
    return Template.instance().socials;
  }
});
