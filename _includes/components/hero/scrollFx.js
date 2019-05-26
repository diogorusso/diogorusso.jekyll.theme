var heroBg = $('.hero-post');
    heroTitle = $('.hero-post-box');
    //when scrolltop reaches 35px then opacity of divs is 1 - 35/35 = 0
    limitTitle = 200;
    limitBg = 300;  

$(window).on('scroll', function() { 
  
  var st = $(this).scrollTop();

  if (st <= limitBg) { 
    heroBg.css({ 'opacity' : (0 + st/limitBg) });
  }

  if (st <= limitTitle) { 
    heroTitle.css({ 'opacity' : (1 - st/limitTitle) });
  }
  // make sure opacity goes to 0 and back

  if (st >= limitTitle) { 
    heroTitle.css({ 'opacity' : (1 - st/limitTitle) });
  }

});