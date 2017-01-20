Template.Header.helpers({
  route: function() {
    return Router.current().route.path();
  }
});

console.log(Router);
