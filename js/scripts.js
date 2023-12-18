(function($){
    //1. Data Background Set
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });
    //2. Data Mask Set
    $('[data-mask]').each(function () {
        $(this).css({
            'mask-image' : 'url(' + $(this).attr('data-mask') + ')',
            '-webkit-mask-image' : 'url(' + $(this).attr('data-mask') + ')',
        });
    });


    $(".mt_hero_slider").slick({
        slidesToShow: 1,
        fade: true,
        speed: 500,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1800, 
                settings: {
                    dots: false,
                }
            }
        ]
    });






})(jQuery)
