app.router.route('appts/new', function () {

  // Render the view
  app.show('appt-edit', { appt: new app.Appt(), title: 'New Appointment' });

  // Bind our events
  $('.appt-info').parsley();

  $('.appt-info').on('submit', function (e) {
    e.preventDefault();

    app.appts.add(new app.Appts(app.serializeForm(this)));

    app.goto('appts');
  });

});
