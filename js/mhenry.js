$(window).load(function() {
    if (document.URL.indexOf('#') == -1) {
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
            if (window.pageYOffset < 20) {
                window.scrollTo(0, 1);
            }
        }
    } else {
        // Better way to offset loading the page by anchor? This jumps when it loads.
        $("html, body").scrollTop($(location.hash).offset().top - 73);
    }
});

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
});