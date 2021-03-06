jQuery(document).ready(function($){
    var mainHeader = $('.nav'),
        //secondaryNavigation = $('.cd-secondary-nav'),
        //this applies only if secondary nav is below intro section
        belowNavHeroContent = $('.sub-nav-hero'),
        headerHeight = mainHeader.height();
    
    //set scrolling variables
    var scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset = 150;

    $(window).on('scroll', function(){
        if( !scrolling ) {
            scrolling = true;
            (!window.requestAnimationFrame)
                ? setTimeout(autoHideHeader, 250)
                : requestAnimationFrame(autoHideHeader);
        }
    });

    $(window).on('resize', function(){
        headerHeight = mainHeader.height();
    });

    function autoHideHeader() {
        var currentTop = $(window).scrollTop();

        ( belowNavHeroContent.length > 0 ) 
            ? checkStickyNavigation(currentTop) // secondary navigation below intro
            : checkSimpleNavigation(currentTop);

           previousTop = currentTop;
        scrolling = false;
    }

    function checkSimpleNavigation(currentTop) {
        //there's no secondary nav or secondary nav is below primary nav
        if (previousTop - currentTop > scrollDelta) {
            //if scrolling up...
            mainHeader.removeClass('is-hidden');
        } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            //if scrolling down...
            mainHeader.addClass('is-hidden');
        }
    }

    /* OVERLAY FUNCTIONS << */
  $("#menuButton").click(function( event ) {
		// event.preventDefault();
		$(this).toggleClass("switch");
        $("#topnav").toggleClass("reveal");
        $(".nav").toggleClass("is-hidden-cancel");
	});
	/* >> OVERLAY FUNCTIONS */
    // SCROLL % Line
    //capture scroll any percentage
    $(window).scroll(function(){
        var wintop = $(window).scrollTop(), docheight = 
        $(document).height(), winheight = $(window).height();
                var scrolled = (wintop/(docheight-winheight))*100;
            $('.scroll-line').css('width', (scrolled + '%'));
        });
// SCROLL % Line
    //capture scroll any percentage
    $(window).scroll(function(){
        var wintop = $(window).scrollTop(), docheight = 
        $(document).height(), winheight = $(window).height();
                var scrolled = (wintop/(docheight-winheight))*100;
            $('.scroll-line').css('width', (scrolled + '%'));
        });

    
});