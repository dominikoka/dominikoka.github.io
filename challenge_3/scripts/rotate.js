var sdegree = 0;

$(window).scroll(function() {

    sdegree ++ ;
    sdegree = sdegree + 2 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $(".relax__gearImg").css({"-moz-transform" : srotate, "-webkit-transform" : srotate, "transition" : "transform 0s",});
});
