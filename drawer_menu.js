jQuery(function () {
	
	jQuery('.drawer_button').click(function () {
		jQuery(this).toggleClass('active');
		jQuery('.drawer_bg').fadeToggle();
		jQuery('nav').toggleClass('open');
	})
	jQuery('a').click(function () {
		jQuery('.drawer_bg').fadeOut();
		jQuery('.drawer_button').removeClass('active');
		jQuery('nav').removeClass('open');
	});
})