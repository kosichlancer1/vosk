$(document).ready(function () {
    var maxSlides = 5,
        pager = false,
        pagerCustom = '#slider2-pager',
        pagerCustom2 = '#videoSlider-pager',
        width = $(window).width(),
        slideW = 300;

    if (width <= 1100 && width > 820) {
        maxSlides = 3;
    } else if(width <= 820 && width > 640) {
        maxSlides = 2;
        pagerCustom = false;

        pager = true;
    } else if(width <= 640) {
        maxSlides = 1;
        slideW = $(window).width();
        pagerCustom = false;

        pager = true;
    }





    $('.slider1').bxSlider({
        slideWidth: slideW,
        minSlides: maxSlides,
        maxSlides: maxSlides,
        moveSlides: 1,
        slideMargin: 30,
        pager: pager,
        controls: true,
        infiniteLoop: true

    });




    $('.slider2').bxSlider({
        pager: pager,
        pagerCustom: pagerCustom,
        controls: true,
        infiniteLoop: true

    });

    $('#videoSlider').bxSlider({
        pagerCustom: pagerCustom2,
        controls: true,
        infiniteLoop: true,
        useCSS: false
    });




    $('.mobile-menu').click( function () {
        $('.header-menu nav').slideToggle();

    });

    window.addEventListener('resize', function () {
        if(window.innerWidth > 768) {
            $('.header-menu nav').css('display', 'inline-block');
        } else {
            $('.header-menu nav').css('display', 'none');
        }
    })

    $('.videoSection iframe').css('width', '100%')



        // $(window).resize(function () {
        //     var galPrev = (((window.innerWidth - $('.container')[0]).width / 2) + 30) + 'px';
        //     $('.gallerySection .bx-prev').css('right',  )
        // })



});