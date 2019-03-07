var numSlick = 0;
$('.slider-products').each( function() {
  numSlick++;
  $(this).addClass( 'slider-' + numSlick ).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav.slider-' + numSlick
  });
});