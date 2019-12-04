$(document).ready(function() {
  //show date for last apdated
  $("#date").text(moment().format("lll"));

  $("#dataTable").DataTable();

  // Toggle the side navigation
  $("#sidebarToggle").on("click", function(e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  });

  // Scroll to top button
  $(document).on("scroll", function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  $(document).on("click", "#cancel", function() {
    location.reload();
  });
});
