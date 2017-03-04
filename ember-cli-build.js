/*jshint node:true*/
/* global require, module */
var
  EmberApp = require('ember-cli/lib/broccoli/ember-app'),
  pickFiles  = require('broccoli-static-compiler'),
  mergeTrees = require('broccoli-merge-trees')
;

module.exports = function(defaults) {
  var app, fonts;

  app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  fonts = pickFiles(app.bowerDirectory + '/uikit/fonts', {
    srcDir: '/',
    files: ['*'],
    destDir: '/fonts'
  });

  app.import(`${app.bowerDirectory}/swiper/dist/css/swiper.min.css`);
  app.import(`${app.bowerDirectory}/swiper/dist/js/swiper.min.js`);
  app.import(`${app.bowerDirectory}/uikit/css/uikit.min.css`);
  app.import(`${app.bowerDirectory}/uikit/js/uikit.min.js`);
  app.import(`${app.bowerDirectory}/d3/d3.js`);
  app.import(`${app.bowerDirectory}/radial-progress-chart/dist/radial-progress-chart.js`);

  return mergeTrees([app.toTree(), fonts]);
};
