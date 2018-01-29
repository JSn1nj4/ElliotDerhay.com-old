import './SingleProjectEntry.html';

Template.SingleProjectEntry.onCreated(function singleProjectEntryCreated() {
  this.msgCallback = this.data.msgCallback;
  this._id = this.data.entry._id;
});

Template.SingleProjectEntry.events({
  'submit .project-listing'(e, tpl) {
    // First things first: prevent default form submit action
    e.preventDefault();

    let formData = e.target;
    let projID = Template.instance()._id;
    let projData = {
      name: formData.proj_name.value,
      url: formData.proj_url.value,
      isSource: formData.isSource.checked,
      author: {
        user: formData.auth_user.value,
        url: formData.auth_url.value
      }
    };

    Meteor.call('updateProject', { projID, projData }, tpl.msgCallback);
  },

  'click .delete-btn'(e, tpl) {
    let projID = Template.instance()._id;
    Meteor.call('deleteProject', { projID }, tpl.msgCallback);
  }
});

Template.SingleProjectEntry.helpers({
  checkRepoType(isSource) {
    return isSource ? 'checked' : '';
  },
});
