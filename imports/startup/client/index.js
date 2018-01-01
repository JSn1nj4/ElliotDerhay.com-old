import { Template } from 'meteor/templating'; // eslint-disable-line no-unused-vars
import './helpers.js';
import './routes.js';

// @TODO: Revisit this before first release; likely unnecessary
Blaze.TemplateInstance.prototype.findParentTemplate = function (name) {
  var view = this.view;
  while (view) {
    if (view.name === `Template.${name}`) {
      return view.templateInstance();
    }
    view = view.parentView;
  }
};
