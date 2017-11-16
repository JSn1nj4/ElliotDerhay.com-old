import { Template } from 'meteor/templating';
import './helpers.js';
import './routes.js';

Blaze.TemplateInstance.prototype.findParentTemplate = function (name) {
  var view = this.view;
  while (view) {
    if (view.name === `Template.${name}`) {
      return view.templateInstance();
    }
    view = view.parentView;
  }
};
