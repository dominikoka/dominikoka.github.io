//button burger
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}


//menu opened


$( ".toggle1" ).click(function() {
    $( ".animation1" ).slideToggle( "slow", function() {
        // Animation complete.
    });
});
$( ".toggle2" ).click(function() {
    $( ".animation2" ).slideToggle( "slow", function() {
        // Animation complete.
    });
});
$( ".toggle3" ).click(function() {
    $( ".animation3" ).slideToggle( "slow", function() {
        display: false;
    });
});
$( ".toggle4" ).click(function() {
    $( ".animation4" ).slideToggle( "slow", function() {
        // Animation complete.
    });
});



//slick/////////////////////////////////////////////////////////////
$(document).on('ready', function() {

    $(".slider__box").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        prevArrow: $('.slider__btnPrv'),
        nextArrow: $('.slider__btnNxt'),
    });
});
