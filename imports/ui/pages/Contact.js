import '../components/HeroImage.js';
import '../components/Socials.js';
import '../components/ContactForm.js';
import './Contact.html';

Template.Contact.onCreated(function contactOnCreated() {
  this.heroSettings = {
    id: 'contact_banner',
    content: {
      title: 'GET IN TOUCH',
      tagline: 'Fill out the form below and I will get back to you as soon as I can.'
    },
    layout: '12,4',
    contentColumn: 1
  };

  this.socials = [
    { name: 'GitHub', link: 'https://github.com/JSn1nj4' },
    { name: 'GitLab', link: 'https://gitlab.com/JSn1nj4' },
    { name: 'Twitter', link: 'https://twitter.com/JSn1nj4' }
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
