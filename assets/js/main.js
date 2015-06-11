$(document).ready(function(){
	
  $('#js-navigation-mobile-menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active','');
		$('.sticky-navigation').toggleClass('open','');
	});
	
})