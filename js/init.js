// This file runs once and is solely responsible for initializing
// the application when it loads.
$(function () {
  'use strict';

  // Initialize application properties
  app.appts = new app.ObjectStore('appts', localStorage);

  // Tell backbone to process the current route
  Backbone.history.start();
});
