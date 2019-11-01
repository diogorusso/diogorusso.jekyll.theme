

// var scroller = document.querySelector('.gallery-row-scroll');
// var leftArrow = document.getElementById('leftArrow');

// var direction = 0;
// var active = false;
// var max = 60;
// var Vx = 0;
// var x = 0.0;
// var prevTime = 0;
// var f = 0.2;
// var prevScroll = 0;

// function physics(time) {
//   // Measure how much time has passed
//   var diffTime = time - prevTime;
//   if (!active) {
//     diffTime = 80;
//     active = true;
//   }
//   prevTime = time;

//   // Give power to the scrolling

//   console.log(diffTime);

//   Vx = (direction * max * f + Vx * (1-f)) * (diffTime / 20);

//   x += Vx;
//   var thisScroll = scroller.scrollLeft;
//   var nextScroll = Math.floor(thisScroll + Vx);

//   if (Math.abs(Vx) > 0.5 && nextScroll !== prevScroll) {
//     scroller.scrollLeft = nextScroll;
//     requestAnimationFrame(physics);
//   } else {
//     Vx = 0;
//     active = false;
//   }
//   prevScroll = nextScroll;
// }

// leftArrow.addEventListener('mousedown', function () {
//   direction = -1;
//   if (!active) {
//     requestAnimationFrame(physics);
//   }
// });

// leftArrow.addEventListener('mouseup', function () {
//   direction = 0;
// });

// rightArrow.addEventListener('mousedown', function () {
//   direction = 1;
//   if (!active) {
//     requestAnimationFrame(physics);
//   }
// });
// rightArrow.addEventListener('mouseup', function(event){
//   direction = 0;
// });

// // controller stuff
// var widthControlled = document.getElementById('widthControlled');
// var widthController = document.getElementById('widthController');
// widthController.addEventListener('input', function (event) {
//   widthControlled.style.width = this.value;
// });


// duration of scroll animation
var scrollDuration = 500;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var leftBorder = document.getElementsByClassName('border-left');
var rightPaddle = document.getElementsByClassName('right-paddle');
var rightBorder = document.getElementsByClassName('border-right');

// get items dimensions
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
	return $('.gallery-row').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.gallery-row-scroll').scrollLeft();
};



// finally, what happens when we are actually scrolling the menu
$('.gallery-row-scroll').on('scroll', function() {

	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;

	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
    $(leftPaddle).addClass('hide');
    $(leftBorder).addClass('hide');
    $(rightPaddle).removeClass('hide');
    $(rightBorder).removeClass('hide');
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
    $(leftPaddle).removeClass('hide');
    $(leftBorder).removeClass('hide');
    $(rightPaddle).removeClass('hide');
    $(rightBorder).removeClass('hide');
	} else if (menuPosition >= menuEndOffset) {
    $(leftPaddle).removeClass('hide');
    $(leftBorder).removeClass('hide');
    $(rightPaddle).addClass('hide');
    $(rightBorder).addClass('hide');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

});

// scroll to left
$(rightPaddle).on('click', function() {
	$('.gallery-row-scroll').animate( { scrollLeft: getMenuPosition()+itemSize}, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
	$('.gallery-row-scroll').animate( { scrollLeft: getMenuPosition()-itemSize }, scrollDuration);
});
