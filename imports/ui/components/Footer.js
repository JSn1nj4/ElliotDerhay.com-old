import './Socials.js';
import './Footer.html';

Template.Footer.onCreated(function footerOnCreated() {
  this.socials = [
    { name: 'GitHub', link: 'https://github.com/JSn1nj4' },
    { name: 'GitLab', link: 'https://gitlab.com/JSn1nj4' },
    { name: 'Twitter', link: 'https://twitter.com/JSn1nj4' }
  ];
});

Template.Footer.helpers({
  getYear: function() {
    return new Date().getFullYear();
  },
  getSocials() {
    return Template.instance().socials;
  }
});
