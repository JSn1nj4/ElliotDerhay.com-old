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

      const projectId = projects.insert({
        name: 'Test project',
        url: 'http://example.com/test-user/test-project',
        isSource: true,
        author: {
          user: 'test-user',
          url: 'http://example.com/test-user'
        },
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
  });
}
