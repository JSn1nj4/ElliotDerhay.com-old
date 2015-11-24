//Template.Header.routeTxt = Router.current().route.path();
//Session.set('currentRoute', Iron.Location.get().path);
//Template.Header.route = Session.get('currentRoute');

Template.Header.helpers({
  route: function() {
    return Router.current().route.path();
  }
});

console.log(Router);
