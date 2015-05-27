$(function () {

  function show(html) {
    $('#main-content').html(html);
    var appts = [];

    $(".appt-info").submit(function(e) {
      e.preventDefault();

      var apptInput = {
        title: $(".title").val(),
        date: $(".date").val(),
        time: $(".time").val(),
        street: $(".street").val(),
        city: $(".city").val(),
        state: $(".state").val(),
      };

      users.push(apptInput);

      $(".appts-set").html(appts.map(function(appt) {
      //  return "<li>" + user.firstName + " " + user.lastName + " : " + user.email + "</li>";

      }));
      //change these
      $(".appt-info").children('input').val('');
        });

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
