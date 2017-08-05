$(document).ready(function () {

    // инициация слайдеров и переменные для маниауляции параметрами слайдеров

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
        auto: true,
        pause: 5000,
        autoHover: true,
        infiniteLoop: true

    });

    $('.slider2').bxSlider({
        auto: true,
        pause: 5000,
        autoHover: true,
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



    // открытие меню на мобилках

    $('.mobile-menu').click( function () {
        $('.header-menu nav').slideToggle();
    });


    // закрытие мобильного меню при нажатии на ссылки

    $('.header-menu nav a').click(function () {
        if(window.innerWidth < 768) {
            $('.header-menu nav').slideToggle();
        }
    });


    // восстановление меню при обратном ресайзе на десктоп

    window.addEventListener('resize', function () {
        if(window.innerWidth > 768) {
            $('.header-menu nav').css('display', 'inline-block');
        } else {
            $('.header-menu nav').css('display', 'none');
        }
    })


    // перебивание стилей у iframe видео

    $('.videoSection iframe').css('width', '100%')


    //прилипающее меню на мобилках

    document.addEventListener('scroll', function () {

            if($('body').scrollTop() > ($('header').height())- ($('.header-menu').height())) {
                $('.header-menu').addClass('sticky');
                $('.videoSection').css('padding-top', $('.header-menu').height() + 46 + 'px')
            } else {
                $('.header-menu').removeClass('sticky');
                $('.videoSection').css('padding-top','46px')
            }


    })


    // плавный переход по якорям

    $(".header-menu").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

        top = $(id).offset().top - $('.header-menu').height() - 30;
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $(".banner-buttons").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top ;

        $('body,html').animate({scrollTop: top}, 1500);



    });


    // раскрытие блока с подробной инфой о воске

    $('#more-inf').click(function(event){
        event.preventDefault();
       $('.descSection').slideToggle();
    });

    $('select').styler();

});