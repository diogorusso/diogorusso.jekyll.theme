

classLazyHidden = 'lazy-hidden',

$(window).lazyLoadXT();
// fix for isotope filtering  more: https://isotope.metafizzy.co/events.html#layoutcomplete
$.lazyLoadXT.updateEvent+='layoutComplete';
$.lazyLoadXT.updateEvent+=' afterChange';
$.lazyLoadXT.onload.addClass = 'lazy-loaded';
$.lazyLoadXT.onload.removeClass = classLazyHidden;
$.lazyLoadXT.onstart.addClass = classLazyHidden;
$.lazyLoadXT.onerror.removeClass = classLazyHidden;

