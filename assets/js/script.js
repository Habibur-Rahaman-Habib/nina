(function ($) {

    /*
    1. Scroll top button
    2. Preloader
    3. page slider
    4. Fancybox
    5. wow js
    6. filter
    7. Header Sticky
    8. Button Hover js
    9. Service Hover Function
    10. counter UP

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
    setTimeout(() => {
        $('.preloader').fadeOut()
    }, 2000);

    // 3. page  slider

    /********* Testimonial  slider **************/
    $(".blog_img_slider").slick({
        slidesToShow: 1,
        asNavFor: ".blog_content_slider",
        arrows: true,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        dots: true,
        dotsClass: 'slider-paging-number',
        customPaging: function (slick, index) {
            return (index + 1) + ' ' + '/' + slick.slideCount;
        }
    })
        .on('afterChange', function (event, slick, currentSlide) {
            $(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));

        });



    $(".blog_content_slider").slick({
        slidesToShow: 5,
        focusOnSelect: true,
        arrows: false,
        asNavFor: ".blog_img_slider",
        centerMode: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
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


    //4. Fancybox
    Fancybox.bind("[data-fancybox]", {});


    //5. wow js
    new WOW().init();

    // 6. filter
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

    //7. Header Sticky
    $(window).scroll(function () {

        if ($(window).scrollTop() > 200) {
            $('.header_bottom').addClass('fixed_menu');
        } else {
            $('.header_bottom').removeClass('fixed_menu');
        }
    });


    //8. Button Hover JS
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

    //9. service hover function
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

