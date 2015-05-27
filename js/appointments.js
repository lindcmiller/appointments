$(function () {
  'use strict';

  //function show(html) {
  //  $('#main-content').html(html);

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
        return "<li>" + title + "</li>"; //+ "<li>" + date + "</li>"
    //    + "<li>" + time + "</li>"
    //    + "<li>" + street + ", " + city + " " + state "</li>";

  }));

      $(".appt-info").children('input').val('');
        });

};

});




/*
  function showEditView() {
    show($('#edit-view').html());
  }

  function showListView() {
    show($('#list-view').html());
  }

  $('#main-content').on('click', '.add-appt', showEditView);

  $('#main-content').on('click', '.back', showListView);

  showListView();
*/
