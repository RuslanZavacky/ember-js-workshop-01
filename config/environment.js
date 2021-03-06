/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-js-workshop-01',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    API: {
      host: 'http://localhost:4200',
      namespace: 'api'
    },

    contentSecurityPolicy: {
      'default-src': "",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline'",
      'font-src': "'self' data: https://fonts.gstatic.com",
      'connect-src': "'self'",
      'report-uri': "http://localhost:4200/api/abuse",
      'img-src': "*",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'media-src': "'self'",
      'object-src': "'self'",
      'frame-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
