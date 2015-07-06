$(document).ready(function(){
	smoothScroll(500);
	
  $('#js-navigation-mobile-menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active','');
		$('.sticky-navigation').toggleClass('open','');
	});
	
	$('.hide').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active','');
		$('.sticky-navigation').toggleClass('open','');
	});
	
	$('#work .article-wrap a').on('click', function(){
		event.preventDefault();
		var postURL = $(this).attr('data');
		loadContent(postURL);
		$('.project-details').show();
	});
	
	$('.modal-overlay, .modal-close').on('click', function() {
		$('.main-content.modal-open').removeClass('modal-open');
	});
	
	$('.modal-wrap').on('click', function(e) {
		e.stopPropagation();
	});
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"], #work .article-wrap a').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

//http://callmenick.com/post/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation
var aChildren = $('ul.sticky-navigation-menu li').children();
var aArray = [];
for (var i=0; i < aChildren.length; i++) {
	var aChild = aChildren[i];
	var ahref = $(aChild).attr('href');
	aArray.push(ahref);
}

$(window).scroll(function(){
	var windowPos = $(window).scrollTop();
	var windowHeight = $(window).height();
	var docHeight = $(document).height();
	
	for (var i=0; i < aArray.length; i++) {
		var theID = aArray[i];
		var sectionPos = $(theID).offset().top;
		var sectionHeight = $(theID).height();
		if (windowPos >= sectionPos && windowPos < (sectionPos + sectionHeight)){
			$("a[href='" + theID + "']").addClass('nav-active');
		} else {
			$("a[href='" + theID + "']").removeClass('nav-active');
		}
	}
	
	if(windowPos + windowHeight == sectionHeight) {
		if(!$('ul.sticky-navigation-menu li:last-child a').hasClass('nav-active')){
			var navActiveCurrent = $('.nav-active').attr('href');
			$("a[href='" + navActiveCurrent + "']").removeClass('nav-active');
			$('ul.sticky-navigation-menu li:last-child a').addClass('nav-active');
		}
	}
});

function loadContent(href){
	$('#project').load(href + ' .post-section-wrap');
};