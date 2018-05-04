//headroom_custom
// grab an element
var myElement = document.querySelector(".headroom");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();


//hovedir_custom
$(function() {

    $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );

});

//roll__custom
var item1 = $(".gallery__rolls1");
var item2 = $(".gallery__rolls2");
var item3 = $(".gallery__rolls3");
var item4 = $(".gallery__rolls4");
var item5 = $(".gallery__rolls5");

$(function() {
// OPACITY OF BUTTON SET TO 0%
    item1.css("opacity","0");


// ON MOUSE OVER
    item1.hover(function () {

// SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        },

// ON MOUSE OUT
        function () {

// SET OPACITY BACK TO 50%
            $(this).stop().animate({
                opacity: 0
            }, "slow");
        });
});
$(function() {
// OPACITY OF BUTTON SET TO 0%
    item2.css("opacity","0");


// ON MOUSE OVER
    item2.hover(function () {

// SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        },

// ON MOUSE OUT
        function () {

// SET OPACITY BACK TO 50%
            $(this).stop().animate({
                opacity: 0
            }, "slow");
        });
});
$(function() {
// OPACITY OF BUTTON SET TO 0%
    item3.css("opacity","0");


// ON MOUSE OVER
    item3.hover(function () {

// SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        },

// ON MOUSE OUT
        function () {

// SET OPACITY BACK TO 50%
            $(this).stop().animate({
                opacity: 0
            }, "slow");
        });
});
$(function() {
// OPACITY OF BUTTON SET TO 0%
    item4.css("opacity","0");


// ON MOUSE OVER
    item4.hover(function () {

// SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        },

// ON MOUSE OUT
        function () {

// SET OPACITY BACK TO 50%
            $(this).stop().animate({
                opacity: 0
            }, "slow");
        });
});
$(function() {
// OPACITY OF BUTTON SET TO 0%
    item5.css("opacity","0");


// ON MOUSE OVER
    item5.hover(function () {

// SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        },

// ON MOUSE OUT
        function () {

// SET OPACITY BACK TO 50%
            $(this).stop().animate({
                opacity: 0
            }, "slow");
        });
});

//rotate_custom
var sdegree = 0;

$(window).scroll(function() {

    sdegree ++ ;
    sdegree = sdegree + 2 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $(".relax__gearImg").css({"-moz-transform" : srotate, "-webkit-transform" : srotate, "transition" : "transform 0s",});
});

//scrollreveal_custom
window.sr = ScrollReveal();
sr.reveal('.relax__boxText', { duration: 800,origin: 'right', distance: '200px',
});
sr.reveal('.relax__items', { duration: 1500,origin: 'right', distance: '200px',delay: 500
});
sr.reveal('.relax__button', { duration: 1500,origin: 'right', distance: '200px',delay: 1000
});
sr.reveal('client__circle', { duration: 700,origin: 'left', distance: '200px',
});


sr.reveal('.client__background', { duration: 1500,origin: 'right', distance: '200px',
});

sr.reveal('.ready__title', { duration: 900,origin: 'left', distance: '200px',
});



sr.reveal('.project__itemImg', { duration: 900,origin: 'left', distance: '100px',
});
sr.reveal('.project__itemText', { duration: 900,origin: 'right', distance: '100px',
});

sr.reveal('.values__itemImg', { duration: 900,origin: 'top', distance: '100px',
});

//slick_custom
$(document).on('ready', function() {

    $(".titleSection__slider").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,

    });
});

//smooth_custom
$(document).ready(function() {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})