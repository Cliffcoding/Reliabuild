$(appready)

function appready() {
  $('.parallax').parallax();
  $('.materialboxed').materialbox();
  $('#about-link').click(function() {
		$('html, body').stop(true, true).animate({
			scrollTop: $('#about').offset().top
		}, 1500);
  });
  $('#image-link').click(function() {
		$('html, body').stop(true, true).animate({
			scrollTop: $('#images').offset().top
		}, 2500);
  });
  $('#contact-link').click(function() {
		$('html, body').stop(true, true).animate({
			scrollTop: $('#contact').offset().top
		}, 3500);
  });
}
