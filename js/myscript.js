/*================================
  |   |  Progress Bars
================================*/
$(function () {
  $("#skills").waypoint(function () {

    $(".progress-bar").each(function () {

      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 500);
    });

  });
  this.destroy();
}, {
  offset: 'bottom-in-view'
});


/*================================
  |   |  Magnific Popup
================================*/
$(function () {
  $('.project-box').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }

  });
});

/*Smooth Scroll*/
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    let section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 65
    }, 500);
  });
});

/*show and hide back-to-top*/
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      //show back to top
      $('#back-to-top').fadeIn();
    } else {
      //hide back to top
      $('#back-to-top').fadeOut();
    }
  });
});