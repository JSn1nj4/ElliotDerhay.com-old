// Server startup entry point
// @TODO: Figure out how to use SSL later. Would be nice to have.
// import { SSLProxy } from 'meteor/tarang:ssl';
import '/imports/api/projects/methods.js';
import '/imports/api/projects/server/publications.js';
import './fixtures.js';

if(process.env.NODE_ENV == 'development') {
  process.env.ROOT_URL = 'elliotderhay.test';
  // SSLProxy({
  //   port: 6000,
  //   ssl: {
  //     key: Assets.getText('certs/ed-key.pem'),
  //     cert: Assets.getText('certs/ed-cert.pem'),
  //     ca: Assets.getText('certs/ed-csr.pem')
  //   }
  // });
}
