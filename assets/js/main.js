$(document).ready(function(){
	smoothScroll(500);
	
  $('#js-navigation-mobile-menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active','');
		$('.sticky-navigation').toggleClass('open','');
	});
	
	$('.hide, #js-navigation-menu').on('click', function(e){
		e.preventDefault();
		$('#js-navigation-mobile-menu').toggleClass('active','');
		$('.sticky-navigation').toggleClass('open','');
	});
	
	$('#notes .article-wrap a').on('click', function(e){
		e.preventDefault();
		var postURL = $(this).attr('data');
		loadContent(postURL);
		$('.project-details').show();
	});
	
	if ($(window).width() < 1200) {
		$('.modal-effect').addClass('modal-show');
	}
	
	$('.modal-overlay, .close-modal').on('click', function() {
		$('.modal-effect.modal-show').removeClass('modal-show');
	});

	$('.modal-wrap').on('click', function(e) {
		e.stopPropagation();
	});
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"], #notes .article-wrap a').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function loadContent(href){
	$('#project').load(href + ' #post-details');
	$('.post-section-wrap h1').load(href + ' span.section-header');
	$('p.project-info').load(href + ' .subhead span');
};

//http://callmenick.com/post/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation
var aChildren = $('ul#js-navigation-menu li').children();
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
			$("a[href='" + theID + "']").addClass('tile-active');
		} else {
			$("a[href='" + theID + "']").removeClass('tile-active');
		}
	}
	
	if(windowPos + windowHeight == sectionHeight) {
		if(!$('ul#js-navigation-menu li:last-child a').hasClass('tile-active')){
			var navActiveCurrent = $('.tile-active').attr('href');
			$("a[href='" + navActiveCurrent + "']").removeClass('tile-active');
			$('ul#js-navigation-menu li:last-child a').addClass('tile-active');
		}
	}
});