// Server startup entry point
import '/imports/api/projects/methods.js';
import '/imports/api/projects/server/publications.js';
import './fixtures.js';

if(process.env.NODE_ENV == 'development') {
  process.env.ROOT_URL = 'elliotderhay.test';
}
