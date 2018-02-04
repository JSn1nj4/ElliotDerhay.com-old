import { projects } from '/imports/api/projects/projects.js';
import '../components/HeroImage.js';
import './Projects.html';

Template.Projects.onCreated(function projectsOnCreated() {
  Meteor.subscribe('projects');

  this.heroSettings = {
    id: 'projects_banner',
    content: {
      title: 'PROJECTS',
      tagline: 'Lorem ipsum dolor sit amet, mea no movet scaevola assueverit, pro ferri choro maiestatis in'
    },
    layout: '4,12',
    contentColumn: 2
  };
});

Template.Projects.helpers({
  listProjects() {
    // return all projects for the time being
    return projects.find({}, { sort: { updatedAt: -1 } }).fetch();
  },
  getHeroSettings() {
    return Template.instance().heroSettings;
  }
});
