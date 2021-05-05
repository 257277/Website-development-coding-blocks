jQuery(document).ready(function($) {

	//	Let's go!

	let burgerTL = gsap.timeline({ paused: true }).timeScale(1);
	burgerTL.to('.bun-top', { yPercent: -100, duration: 0.5, ease: 'back.out(3)' });
	burgerTL.to('.bun-bottom', { yPercent: 100, duration: 0.5, delay: -0.5, ease: 'back.out(3)' });
	burgerTL.to('.mustard-top', { yPercent: -500, duration: 0.5, delay: -0.45, ease: 'back.out(3)' });
	burgerTL.to('.mustard-bottom', { yPercent: 500, duration: 0.5, delay: -0.45, ease: 'back.out(3)' });
	burgerTL.to('.burger', { yPercent: 50, duration: 0.5, delay: -0.4, ease: 'back.out(3)' });
	burgerTL.to('.mayo', { yPercent: -50, duration: 0.5, delay: -0.4, ease: 'back.out(3)' });
	burgerTL.to('.cheese', { yPercent: 35, duration: 0.5, delay: -0.35, ease: 'back.out(3)' });
	burgerTL.to('.lettuce', { yPercent: -100, duration: 0.5, delay: -0.35, ease: 'back.out(3)' });

	$('svg').click(function(evt) {
		$('svg').toggleClass('clicked');

		if ($('svg').hasClass('clicked')) {
			burgerTL.play();
		} else {
			burgerTL.reverse();
		}
	});
});