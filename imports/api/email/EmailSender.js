import { EmailSchema } from './schemas.js';

export class EmailSender {
  constructor(settings, testMode = false) {
    this.settings = settings;
    this.testMode = testMode;
  }

  cleanEmail(email) {
    let emailContext = EmailSchema.newContext();

    // email checking code

    return email;
  }

  sendEmail(email) {
    email = this.cleanEmail(email);

    if(this.testMode) {
      console.log(`Email object: ${JSON.stringify(email)}`);
      return 'test';
    }

    // send email
    return true;
  }
}
