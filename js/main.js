$(document).ready(function () {

    $('.slider1').bxSlider({
        slideWidth: 300,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 30,
        pager: false,
        controls: true,
        infiniteLoop: true

    });

    $('.slider2').bxSlider({
        pagerCustom: '#slider2-pager',
        controls: true,
        infiniteLoop: true
    });

        // $(window).resize(function () {
        //     var galPrev = (((window.innerWidth - $('.container')[0]).width / 2) + 30) + 'px';
        //     $('.gallerySection .bx-prev').css('right',  )
        // })

});