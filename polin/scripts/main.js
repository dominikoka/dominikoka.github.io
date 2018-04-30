$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});
$(document).ready(function () {
    $(".archives__plus").click(function () {
        $(".archover").slideToggle("slow")

    })
});
$(document).ready(function () {
    $(".archives__second").click(function () {
        $(".archover__second").slideToggle("slow")
    })
});
$(document).ready(function () {
    $(".expand__a").click(function () {
        $(".double").slideToggle("slow")
    })
});

