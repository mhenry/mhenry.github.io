$(document).ready(function () {
  $("a.navbar-brand, ul.nav li a, .jumbotron .btn").click(function (event) {
    event.preventDefault();
    $(".navbar-collapse.in").collapse("hide");
    $("html, body").stop().animate({
      scrollTop: $($(this).attr("href")).offset().top - 73
    }, 500);
    if (history.pushState) {
      history.pushState(null, null, $(this).attr("href"));
    } else {
      location.hash = $(this).attr("href");
    }
  });

  $("#send").click(function() {
    var data = {
      email: $("#email").val(),
      name: $("#name").val(),
      message: $("#message").val()
    };
    $.ajax({
      type: "POST",
      url: "https://formspree.io/mpzywglr",
      dataType: "json",
      data: data,
      success: function() {
        $("form div.col-md-8").prepend('<div class="alert alert-success fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Success!</strong> We\'ll be in touch soon.</div>');
        $("form").trigger("reset");
      },
      error:function() {
        $("form div.col-md-8").prepend('<div class="alert alert-danger fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>D\'oh!</strong> Something went wrong.</div>');
      }
    });
  });
});
