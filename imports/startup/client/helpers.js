// This file will be for helpers that are shared across the app

Template.registerHelper('CalDate', function(date) {
  return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
});

Template.registerHelper('pathFor', function(routeName) {
  return FlowRouter.path(routeName); // eslint-disable-line
});