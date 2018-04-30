$(document).on('ready', function() {
    $('.items.main').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    $('.control__back.main').click(function(){
        $('.items.main').slick('slickPrev');
    })

    $('.control__next.main').click(function(){
        $('.items.main').slick('slickNext');
    })
    $('.control__dots').click(function(){
        $('.slider__items').slick('dots');
    })

    $('.items.firms').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    $('.control__back.firms').click(function(){
        $('.items.firms').slick('slickPrev');
    })

    $('.control__next.firms').click(function(){
        $('.items.firms').slick('slickNext');
    })
    $('.control__dots').click(function(){
        $('.slider__items').slick('dots');
    })
    $('.items.akt').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    });
    $('.control__back.akt').click(function(){
        $('.items.akt').slick('slickPrev');
    })

    $('.control__next.akt').click(function(){
        $('.items.akt').slick('slickNext');
    })
    $('.control__dots').click(function(){
        $('.slider__items').slick('dots');
    })


    $('.items.aktsecond').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            ]
    });
    $('.control__back.aktsecond').click(function(){
        $('.items.aktsecond').slick('slickPrev');
    })

    $('.control__next.aktsecond').click(function(){
        $('.items.aktsecond').slick('slickNext');
    })
    $('.control__dots').click(function(){
        $('.slider__items').slick('dots');
    })

    $('.items.szc').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    });
    $('.control__back.szc').click(function(){
        $('.items.szc').slick('slickPrev');
    })

    $('.control__next.szc').click(function(){
        $('.items.szc').slick('slickNext');
    })
    $('.control__dots').click(function(){
        $('.slider__items').slick('dots');
    })
    $('.items.prod').slick({
        dots: false,
        infinite: false,

        speed: 300,

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    $('.items.maintwo').slick({
        dots: false,
        infinite: false,
        speed: 300,

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    $('.control__back.maintwo').click(function(){
        $('.items.maintwo').slick('slickPrev');
    })

    $('.control__next.maintwo').click(function(){
        $('.items.maintwo').slick('slickNext');
    })
    $('.control__dots').click(function(){
        $('.slider__items').slick('dots');
    })
});

$('.slider__items.firms').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='components/img/arrow_back.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='components/img/arrow_next.png'>",
});

