import '../components/HeroImage.js';
import './Home.html';

Template.Home.onCreated(function homeOnCreated() {
  this.heroSettings = {
    id: 'home_banner',
    content: {
      title: 'ELLIOT DERHAY',
      tagline: 'Lorem ipsum dolor sit amet, mea no movet scaevola assueverit, pro ferri choro maiestatis in'
    },
    layout: '4,12',
    contentColumn: 2
  };
});

Template.Home.helpers({
  getHeroSettings() {
    return Template.instance().heroSettings;
  }
});
