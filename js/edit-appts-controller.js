app.router.route('appts/:id', function (id) {

  var appt = app.appts.getById(id);

  if (!appt) {
    app.show('404', { url: location.hash });
    return;
  }

  // Render the view
  app.show('appt-edit', {
    appt: appt,
    title: 'Edit Appointment',
    isDeletable: true
  });

  // Bind our events
  $('.appt-info').parsley();

  $('.appt-info').on('submit', function (e) {
    e.preventDefault();

    app.appts.update(id, new app.Appt(app.serializeForm(this)));

    app.goto('appts');
  });

  $('.delete-appt').click(function () {
    app.appts.remove(id);
    app.goto('appts');
  });

});
