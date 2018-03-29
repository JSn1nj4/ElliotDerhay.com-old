import { EmailSender } from './EmailSender.js';
import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';

if(Meteor.isServer) {
  describe('Expected EmailSender class behavior', function() { // eslint-disable-line no-undef
    describe('Email object instantiation', function() { // eslint-disable-line no-undef
      it('create email object in test mode', function() { // eslint-disable-line no-undef
        let sender = new EmailSender(null, true);
        assert.isOk(sender.testMode, 'object created in test mode');
      });

      it('create email object in live mode', function() { // eslint-disable-line no-undef
        assert.isOk(false);
      });
    });

    describe('Expect email sending to succeed', function() { // eslint-disable-line no-undef
      it('email sends in test mode', function() { // eslint-disable-line no-undef
        assert.isOk(false);
      });

      it('email sends in live mode', function() { // eslint-disable-line no-undef
        assert.isOk(false);
      });
    });

    describe('Expect email sending to fail', function() { // eslint-disable-line no-undef
      it('email validation fails when formatted incorrectly', function() { // eslint-disable-line no-undef
        assert.isOk(false);
      });
    });
  });
}
