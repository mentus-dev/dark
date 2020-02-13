jQuery(document).ready(function($) {
    $('.entry-header, .entry-header .border-top, .entry-header .border-bottom, .entry-header .entry-title, .content').hide();
	$('.entry-header').css({width:0});
	$('a.back-to-top').click(function() {
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: 0}, 500 );
		return false;
	});
});
jQuery(window).load(function($) {
	jQuery('.entry-header').show().animate({width:930},500);
	jQuery('.entry-header .border-top, .entry-header .border-bottom, .entry-header .entry-title').delay(500).fadeIn(500);
	jQuery('.content').delay(1000).slideDown(750);
});