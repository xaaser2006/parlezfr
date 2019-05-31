$(document).ready(function () {
	$('.hero-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	new WOW().init();
});