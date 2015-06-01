$(function () {
  'use strict';

  function show(html) {
    $('#main-content').html(html);

    var apptArray = [];

    $(".appt-info").submit(function(e) {
      e.preventDefault();

      var apptInput = {
        title: $(".title").val(),
        date: $(".date").val(),
        time: $(".time").val(),
        street: $(".street").val(),
        city: $(".city").val(),
        state: $(".state").val()
      };

      appts.push(apptInput);

      $(".appts").html(apptArray.map(function(appt) {
        return
        var description = _.template('<%- m.description %>', { variable: 'm' });
        var date = _.template('<%- m.date %>', { variable: 'm' });
        var time = _.template('<%- m.time %>', { variable: 'm' });
        var street = _.template('<%- m.street %>', { variable: 'm' });
        var city = _.template('<%- m.city %>', { variable: 'm' });
        var state = _.template('<%- m.state %>', { variable: 'm' });
      }));

      //clears fields after submit
      $(".appt-info").children('input').val('');
    });
  }

  function showEditView() {
    show($('#edit-view').html());
  }

  function showListView() {
    show($('#list-view').html());
  }

  $('#main-content').on('click', '.add-appt', showEditView);

  $('#main-content').on('click', '.back', showListView);

  showListView();

});
