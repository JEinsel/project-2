$(document).ready(function(){
  //edit existing user
  $("#edit_user").on("click", function(event) {
    event.preventDefault();

    //saving old information in case don't want to edit some fields
    let oldUserObj = {
      fName: $("#user_f_name").text(),
      lName: $("#user_l_name").text(),
      email: $("#user_email").text()
    };
    $("#user_f_name").html(`
      <input type="text" value="${oldUserObj.fName}" name="new_user_f_name" id="new_user_f_name" class="form-control">
    `);
    $("#user_l_name").html(`
      <input type="text" value="${oldUserObj.lName}" name="new_user_l_name" id="new_user_l_name" class="form-control">
    `);
    $("#user_email").html(`
    <input type="text" value="${oldUserObj.email}" name="new_user_email" id="new_user_email" class="form-control">
    `);
    $("#save_btn_placeholder").html(
      // eslint-disable-next-line quotes
      `<button class="btn btn-block btn-dark" id="user_save">Save</button>`
    );
  });

  //saving edited object
  $(document).on("click", "#user_save", function(event) {
    event.preventDefault();
    let editedUserObj = {
      fName: $("#new_user_f_name")
        .val()
        .trim(),
      lName: $("#new_user_l_name")
        .val()
        .trim(),
      email: $("#new_user_email")
        .val()
        .trim()
    };
    $.ajax({
      url: "/admin/users/" + $("#user_id").text(),
      type: "PUT",
      data: editedUserObj
    }).then(() => location.reload());
  });

  //delete user
  $("#delete_user").on("click", function(event) {
    event.preventDefault();
    if (
      confirm(
        "are you sure you want to delete user with ID " +
          $("#user_id").text() +
          " from databbase?"
      )
    ) {
      $.ajax({
        url: "/admin/users/" + $("#user_id").text(),
        type: "DELETE"
      }).then(() => (location.href = "/admin/users"));
    } else {
      console.log("doing nothing");
    }
  });
});
