$(function () {

    //============================preloader section start============================//
    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(800);
    });
    //============================preloader section end============================//

    //============================scroll to top section start============================//
    $(".scroll_to_top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }

        if (scrolling > 150) {
            $("#nav").addClass("nav_sticky");
        } else {
            $("#nav").removeClass("nav_sticky")
        }

        if (scrolling > 150) {
            $(".main_manu").addClass("nav_sticky");
        } else {
            $(".main_manu").removeClass("nav_sticky")
        }
    });
    //============================scroll to top section end============================//


    //==========================slick slider start==========================//
    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow: ".prevArrow",
        nextArrow: ".nextArrow",
    });

    $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    //==========================slick slider end==========================//

    //==========================mixitup start==========================//

    var mixer = mixitup('.our_work_filter_item');

    //==========================mixitup end==========================//


    //==========================lightbox start==========================//
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        positionFromTop: 100,
        disableScrolling: true,
    })
    //==========================lightbox end==========================//


    //==========================dark theme start==========================//
    var theme = document.getElementById("theme");

    theme.onclick = function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            $("#dark-mode").fadeOut(00);
        } else {
            $("#dark-mode").fadeIn(00);
        }

        if (document.body.classList.contains("dark-theme")) {
            $("#light-mode").fadeIn(0);
        } else {
            $("#light-mode").fadeOut(00);
        }

    }

    //==========================dark theme end==========================//


    //============================animation scroll section start============================//

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500, );
                return false;
            }
        }
    });

    //============================animation scroll section end============================//

});