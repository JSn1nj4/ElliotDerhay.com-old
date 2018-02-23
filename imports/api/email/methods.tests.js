import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import './methods.js';

if(Meteor.isServer) {
  describe('Email sending method', function() { // eslint-disable-line no-undef
    it('can send email', function() { // eslint-disable-line no-undef
      const sendContactEmail = Meteor.server.method_handlers['email.send.contact'];
      const formData = {
        firstname: 'firstname',
        lastname: 'lastname',
        email: 'test@example.com',
        subject: 'Test subject',
        message: 'test message'
      };

      const result = sendContactEmail.apply({}, [{ formData }]);

      assert.equal(result, 'Email sent!');
    });
  });
}
