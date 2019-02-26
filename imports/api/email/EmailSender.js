import { EmailSchema } from './schemas.js';

export class EmailSender {
  constructor(settings, testMode = false) {
    if(!settings && !testMode) {
      throw new Error('Either pass connection settings or set to test mode.');
    }

    this.updateConnectionSettings(settings);
    this.testMode = testMode;
  }

  updateConnectionSettings({host, port, user, password}) {
    this.settings.host = host || '';
    this.settings.port = port || 587;
    this.settings.user = user || '';
    this.settings.password = password || '';

    if(!this.testMode && (!host || !user || !password)) {
      throw new Error('You must set a host, username and password in live mode!');
    }
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
