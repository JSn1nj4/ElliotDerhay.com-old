// Server startup entry point
import '/imports/api/projects/methods.js';
import '/imports/api/projects/server/publications.js';
import './fixtures.js';

import { Email } from 'meteor/email';

Email.send({
  from: 'elliot@example.com',
  to: 'recipient@example.com',
  replyTo: 'elliot@example.com',
  text: `Test email.
  Random number: ${Math.random()}`
});
