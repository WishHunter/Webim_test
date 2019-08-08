(function() {
	$('#open_header_menu').on('click', function(e) {
		e.preventdefault;
		$('header').toggleClass('open_menu');
		return false;
	});
  new WOW().init();
}())