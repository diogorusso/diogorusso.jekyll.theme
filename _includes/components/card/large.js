jQuery(document).ready(function($) {
    

    $('.card-large-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        lazyLoad: 'ondemand',
        // infinite: false,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // arrows: true,
        dots:true,
        // fade: true,
        // asNavFor: '.process-pager-slider'
        adaptiveHeight: false,
    });

});