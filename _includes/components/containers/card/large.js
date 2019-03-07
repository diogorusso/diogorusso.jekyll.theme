$(function () {
    
    var $arrows = $('.arrows');
    var $next = $arrows.children(".slick-next");    
    var $prev = $arrows.children(".slick-prev");
    
    var slick = $('.your-class').slick({
        appendArrows: $arrows
    });

    $('.slick-next').on('click', function (e) {
        var i = $next.index( this )
        slick.eq(i).slickNext();
    });
    $('.slick-prev').on('click', function (e) {
        var i = $prev.index( this )
        slick.eq(i).slickPrev();
    });

});