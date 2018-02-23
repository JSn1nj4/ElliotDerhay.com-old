// Test email-related schemas
import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { EmailSchema } from './schemas.js';

if(Meteor.isServer) {
  let testData = {};
  testData.correctData = {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'test@example.com',
    subject: 'Test subject',
    message: 'test message'
  };
  testData.missingField = {
    firstname: 'firstname',
    lastname: 'lastname',
    subject: 'subject',
    message: 'message'
  };
  testData.wrongData = {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 0,
    subject: 'subject',
    message: 'message'
  };
  testData.badValueLength = {
    firstname: 'firstnamemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
    lastname: 'lastnamedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    email: 'email@email.com',
    subject: 'subject',
    message: 'message'
  };
  testData.invalidEmail = {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'em@il@test.com',
    subject: 'subject',
    message: 'message'
  };

  describe('Email-related schemas', function() { // eslint-disable-line no-undef
    describe('Validate email form data', function() { // eslint-disable-line no-undef
      it('Validation passes with correctly-formed data', function() { // eslint-disable-line no-undef
        let context = EmailSchema.newContext();
        context.validate(testData.correctData);

        assert.equal(context.isValid(), true);
      });
      it('Validation fails with a missing field', function() { // eslint-disable-line no-undef
        let context = EmailSchema.newContext();
        context.validate(testData.missingField);

        assert.equal(context.isValid(), false);
      });
      it('Validation fails with incorrect data', function() { // eslint-disable-line no-undef
        let context = EmailSchema.newContext();
        context.validate(testData.missingField);

        assert.equal(context.isValid(), false);
      });
      it('Validation fails when values are too long', function() { // eslint-disable-line no-undef
        let context = EmailSchema.newContext();
        context.validate(testData.badValueLength);

        assert.equal(context.isValid(), false);
      });
      it('Validation fails with invalid email', function() { // eslint-disable-line no-undef
        let context = EmailSchema.newContext();
        context.validate(testData.invalidEmail);

        assert.equal(context.isValid(), false);
      });
    });
  });
}
