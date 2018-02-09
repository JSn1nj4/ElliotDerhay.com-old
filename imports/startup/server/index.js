// Server startup entry point
// @TODO: Figure out how to use SSL later. Would be nice to have.
// import { SSLProxy } from 'meteor/tarang:ssl';
import '/imports/api/projects/methods.js';
import '/imports/api/projects/server/publications.js';
import '/imports/api/socials/methods.js';
import './fixtures.js';

if(process.env.NODE_ENV == 'development') {
  process.env.ROOT_URL = 'elliotderhay.test';
}

if(process.env.NODE_ENV == 'prod-sim') {
  process.env.ROOT_URL = 'prod.elliotderhay.test';
}

if(process.env.NODE_ENV !== 'production') {
  process.env.MAIL_URL = 'smtp://localhost:1025';
  // SSLProxy({
  //   port: 6000,
  //   ssl: {
  //     key: Assets.getText('certs/ed-key.pem'),
  //     cert: Assets.getText('certs/ed-cert.pem'),
  //     ca: Assets.getText('certs/ed-csr.pem')
  //   }
  // });
}
