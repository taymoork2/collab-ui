// This file configures a web server for testing the production build
// on your local machine.

const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const { chalkProcessing } = require('../../tools/chalkConfig');

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 4100,
  ui: {
    port: 4101,
  },
  server: {
    baseDir: 'dist',
  },

  files: ['src/*.html'],

  middleware: [historyApiFallback()],
});

/* eslint-enable no-console */
