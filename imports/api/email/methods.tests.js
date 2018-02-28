import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import './methods.js';

if(Meteor.isServer) {
  describe('Email sending methods', function() { // eslint-disable-line no-undef
    describe('for client-side interactions', function() { // eslint-disable-line no-undef
      it('can send contact form emails', function() { // eslint-disable-line no-undef
        const sendContactEmail = Meteor.server.method_handlers['email.send.contact'];
        const formData = {
          firstname: 'firstname',
          lastname: 'lastname',
          email: 'test@example.com',
          subject: 'Test subject',
          message: 'test message'
        };

        const result = sendContactEmail.call({}, { formData, getValidation: true });

        assert.equal(result.validation, true);
        assert.equal(result.message, 'Email sent!');
      });

      it('can send password-reset emails', function() { // eslint-disable-line no-undef

      });
    });

    describe('for automatic notifications', function() { // eslint-disable-line no-undef
      it('can send login notification emails', function() { // eslint-disable-line no-undef

      });
    });
  });
}
