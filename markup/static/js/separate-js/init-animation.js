
var tl = new TimelineMax();

// onLeave();


function initGlobalAnimations(el) {
	var controller = new ScrollMagic.Controller();
	var $container = $('.' + el);

	$('.page').addClass('scrollmagic-innited');

	$container.each(function() {
		var self = this;
		var height = self.offsetHeight;

		var scene = new ScrollMagic.Scene({
			triggerElement: self,
			triggerHook: 0
		})
			.setClassToggle(self, 'is-animated')
			.on('enter leave', function(e){
				if(e.type == 'enter'){
					tl
						.to($container && $('.is-animated'), 1, {y: 0, opacity: 1})
						.staggerTo($container && $('.is-animated').find('[data-stagger]'), 0.4, {y: 0, opacity: 1}, 0.1);
				} else {
					tl
						.to($container, 0, {y: 50, opacity: 0})
						.staggerTo($container.find('[data-stagger]'), 0, {y: 30, opacity: 0});
				}
			})
			.addTo(controller);

	});

}

tl
	.to($('.section'), 0.5, {y: 50, opacity: 0})
	.to($('[data-stagger]'), 0.4, {y: 30, opacity: 0});

	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
$(document).ready( function() {
	initGlobalAnimations('section');
	initGlobalAnimations('coins');

});


