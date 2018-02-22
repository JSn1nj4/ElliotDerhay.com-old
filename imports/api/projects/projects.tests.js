// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { projects } from './projects.js';
import { ProjectSchemas } from './schemas.js';

if(Meteor.isServer) {
  describe('projects collection', function() { // eslint-disable-line no-undef
    it('insert correctly', function() { // eslint-disable-line no-undef
      projects.attachSchema(ProjectSchemas.Project);

      // const projectId = projects.insert({
      //
      // });
    });
  });
}
