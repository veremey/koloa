import PubSub from 'pubsub-js';

PubSub.subscribe('gotoSlide', function (msg, data) {
	console.log(data);
	$('[data-slide='+data.from+']').removeClass('is-active');
	$('[data-slide='+data.to+']').addClass('is-active')
});