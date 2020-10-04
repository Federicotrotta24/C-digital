/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

//scroll reveal 
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.titulo', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
//servicios
sr.reveal('.sobreMiDerecha1', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.sobreMiIzquierda1', {
    duration: 2500,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.sobreMiDerecha2', {
    duration: 3000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.sobreMiIzquierda2', {
    duration: 3500,
    origin: 'left',
    distance: '300px'
});
//sobre nosotros 
sr.reveal('.sobre', {
    duration: 2000,
    origin: 'top',
    distance: '300px',

});
//team
sr.reveal('.team1', {
    duration: 3000,
    origin: 'left',
    distance: '750px',

});

sr.reveal('.team2', {
    duration: 2500,
    origin: 'left',
    distance: '700px',

});
sr.reveal('.team3', {
    duration: 3000,
    origin: 'left',
    distance: '500px',

});
sr.reveal('.socialIcons3', {
    duration: 2000,
    origin: 'right',
    distance: '300px',

});
sr.reveal('.socialIcons4', {
    duration: 2500,
    origin: 'right',
    distance: '300px',

});