// Server startup entry point
import '/imports/api/projects/methods.js';
import '/imports/api/projects/server/publications.js';
import './fixtures.js';

import { Email } from 'meteor/email';
const random = Math.random();

Email.send({
  from: 'Elliot Derhay <elliot@example.com>',
  to: 'Recipient <recipient@example.com>',
  replyTo: 'Elliot Derhay <elliot@example.com>',
  subject: 'Local test email',
  html: `<h1>Test email.</h1>
  <p>Random number: ${random}</p>`,
  text: `Test email. Random number: ${random}`
});
