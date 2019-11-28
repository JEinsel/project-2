//creating new amenity
$("#create_instructor").on("click", function(event) {
  console.log("click");
  event.preventDefault();
  //only validating name now, have to implement validation
  if ($("#instructor_first_name").val() === "") {
    $("#firstNameHelp").text("Please, insert instructor's name");
    return;
  }
  //creating the new amenity object
  let newInstructorObj = {
    firstName: $("#instructor_first_name")
      .val()
      .trim(),
    lastName: $("#instructor_last_name")
      .val()
      .trim(),
    bio: $("#instructor_bio")
      .val()
      .trim(),
    photo: $("#instructor_photo")
      .val()
      .trim(),
    email: $("#instructor_email")
      .val()
      .trim(),
    phone: $("#instructor_phone")
      .val()
      .trim()
  };
  //sending our object to the post route
  $.post("/admin/instructors", newInstructorObj).then(() => location.reload());
});
