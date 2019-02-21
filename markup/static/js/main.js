
import ImageLoader from './ImageLoad';
import initanimation from './init-animation';


// pixi animations
var targets = document.querySelectorAll('.js-loadme');

var options = {
	rootMargin: '0px',
	threshold: [0,1]
};

var observer = new IntersectionObserver(items => {
	// console.log(items);
	items.forEach(el => {

		if(el.isIntersecting && el.intersectionRatio>0) {
			if(!$(el.target).hasClass('is-init')) {
				$(el.target).addClass('is-init');
				new ImageLoader($(el.target));
				// console.log('intersected',el.target);
			}
		}
	});
}, options);

for (var i = 0; i < targets.length; i++) {
	observer.observe(targets[i]);
}

$(window).on('resize', function () {
	for (var i = 0; i < targets.length; i++) {
		observer.observe(targets[i]);
	}
});

