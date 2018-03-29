import { EmailSchema } from './schemas.js';

export class EmailSender {
  constructor(settings, testMode = false) {
    if(!settings && !testMode) {
      throw new Error('Either pass connection settings or set to test mode.');
    }

    this.updateConnectionSettings(settings);
    this.testMode = testMode;
  }

  updateConnectionSettings(settings) {
    this.settings = settings;
  }

  cleanEmail(email) {
    // let emailContext = EmailSchema.newContext();

    // email checking code

    return email;
  }

  sendEmail(email) {
    // email = this.cleanEmail(email);

    if(this.testMode) {
      console.log(`Email object: ${JSON.stringify(email)}`);
    }

    if(!this.settings) {
      return 'test';
    }

    // send email
    return true;
  }
}
