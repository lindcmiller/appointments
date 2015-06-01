(function () {
  // When the url is #appts
  app.router.route('appts', ApptListController);

  // When the url is empty (the default route)
  app.router.route('', ApptListController);

  // The user list "controller" function
  function ApptListController () {
    app.show('appt-list', { appts: app.appts });
  }
})();
