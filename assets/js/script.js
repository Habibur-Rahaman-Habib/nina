(function ($) {

    /*
    1. Scroll top button
    2. Preloader
    3. page slider
    4. scroll to bottom
    5. Fancybox
    6. wow js
    7. filter
    8. Header Sticky
    9. counter UP

    */


    //1. Scroll top button
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();
        if (scrollBar > 150) {
            $(".scroll-top-btn").fadeIn();
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    })
    $(".scroll-top-btn").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        });
    });

    //2. Preloader
    // setTimeout(() => {
    //     $('.preloader').fadeOut()
    // }, 2000);

    // 3. page  slider
    /********* testimonial slider **************/
    $(".testi_wrap").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
    });

    /********* blog page slider **************/
    $(".blog_img_slider").slick({
        slidesToShow: 1,
        asNavFor: ".blog_content_slider",
        arrows: true,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-arrow-left-long"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-arrow-right-long"></i></button>',
    });

    $(".blog_content_slider").slick({
        slidesToShow: 1,
        focusOnSelect: true,
        arrows: false,
        asNavFor: ".blog_img_slider",
    });

    /********* work slider **************/
    $('.work_slider').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    /********* brand slider **************/
    $(".brand_slider").slick({
        slidesToShow: 5,
        autoplay: true,
        speed: 700,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                }
            }

        ]
    });

    //4. scroll to bottom
    document.addEventListener('DOMContentLoaded', function () {
        var scrollDownArrow = document.querySelector('.scroll-down-arrow');
        var section2 = document.querySelector('#section2');

        if (scrollDownArrow && section2) {
            scrollDownArrow.addEventListener('click', function () {
                section2.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });


    //5. Fancybox
    Fancybox.bind("[data-fancybox]", {});


    //6. wow js
    new WOW().init();

    // 7. filter
    /******* home page 2 filter ******/
    var $grid = $('.portfolio_item_active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
    });


    $('.portfolio_button').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $(".portfolio_button button").each(function () {
        $(this).on("click", function () {
            $(this).parents(".portfolio_button").find("button.active").removeClass("active");
            $(this).addClass("active");
        });
    });


    /******* blog page filter ******/
    $('.portfolio_button2').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $(".portfolio_button2 button").each(function () {
        $(this).on("click", function () {
            $(this).parents(".portfolio_button2").find("button.active").removeClass("active");
            $(this).addClass("active");
        });
    });

    //8. Header Sticky
    $(window).scroll(function () {

        if ($(window).scrollTop() > 200) {
            $('.header').addClass('fixed_menu');
        } else {
            $('.header').removeClass('fixed_menu');
        }
    });

    //9. counter UP
    $(document).ready(function () {
        $('.count').counterUp({
            delay: 10,
            time: 1500
        });
    });

    //10. Button Hover JS
    $(function () {
        $('.default-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });

    //11. service hover function
    $(".service_item").each(function () {

        $(this).hover(function () {
            $(this).parents(".service_item_box").find(".service_item.active").removeClass("active");
            $(this).addClass("active");
            var case_active = $(this).data("case");

            $(".service_item_box img.active").removeClass("active");
            $(".service_item_box ." + case_active + "").addClass("active");
        });

    });



})(jQuery)

