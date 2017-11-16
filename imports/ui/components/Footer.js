import './Footer.html';

Template.Footer.helpers({
  getYear: function() {
    return new Date().getFullYear();
  }
});
