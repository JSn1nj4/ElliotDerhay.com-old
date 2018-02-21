import { projects } from '/imports/api/projects/projects.js';
import simpleIcons from 'simple-icons';
import { iconCollection } from '/imports/api/socials/socials.js';

// Dummy projects to load if they don't exist
let dummyProjectData = [
  {
    name: 'elliotderhay.com',
    url: 'https://gitlab.com/JSn1nj4/elliotderhay.com',
    isSource: true,
    author: {
      user: 'JSn1nj4',
      url: 'https://gitlab.com/JSn1nj4'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'slackthemes',
    url: 'https://github.com/JSn1nj4/slackthemes',
    isSource: false,
    author: {
      user: 'paracycle',
      url: 'https://github.com/paracycle'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Overwatch Dark Syntax',
    url: 'https://github.com/JSn1nj4/overwatch-dark-syntax',
    isSource: false,
    author: {
      user: 'nektwar',
      url: 'https://gitlab.com/nektwar'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Vue Playground',
    url: 'https://github.com/JSn1nj4/vue-playground',
    isSource: true,
    author: {
      user: 'JSn1nj4',
      url: 'https://gitlab.com/JSn1nj4'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

dummyProjectData.map(doc => {
  let projectsFound = projects.find({name: doc.name}).fetch().length;
  if(projectsFound < 1) {
    projects.insert(doc);
  }
});

// Setup default SVG icons
let defaultIconsList = [
  { icon: simpleIcons['GitHub'], link: 'https://github.com/JSn1nj4' },
  { icon: simpleIcons['GitLab'], link: 'https://gitlab.com/JSn1nj4' },
  { icon: simpleIcons['Twitter'], link: 'https://twitter.com/JSn1nj4' }
];

defaultIconsList.map(doc => {
  let iconsFound = iconCollection.find({ title: doc.icon.title }).fetch().length;
  if(iconsFound < 1) {
    iconCollection.insert({ ...doc.icon, link: doc.link });
  }
});
