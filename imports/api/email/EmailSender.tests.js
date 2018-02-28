import { EmailSender } from './EmailSender.js';
import { assert } from 'chai';
import { Meteor } from 'meteor/meteor';

if(Meteor.isServer) {
  describe('Expected EmailSender class behavior', function() { // eslint-disable-line no-undef
    describe('Email object instantiation', function() { // eslint-disable-line no-undef
      it('create email object in test mode', function() { // eslint-disable-line no-undef
        return false;
      });

      it('create email object in live mode', function() { // eslint-disable-line no-undef
        return false;
      });

      it('fail to create email object when setting both params', function() { // eslint-disable-line no-undef
        return false;
      });
    });

    describe('Expect email sending to succeed', function() { // eslint-disable-line no-undef
      it('email sends in test mode', function() { // eslint-disable-line no-undef
        return false;
      });

      it('email sends in live mode', function() { // eslint-disable-line no-undef
        return false;
      });
    });

    describe('Expect email sending to fail', function() { // eslint-disable-line no-undef
      it('email validation fails when formatted incorrectly', function() { // eslint-disable-line no-undef
        return false;
      });
    });
  });
}
