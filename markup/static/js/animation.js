// import ScrollMagic from 'ScrollMagic';

require(['ScrollMagic'], function(ScrollMagic) {
});


export default class Animation {
	constructor(opt){
		this.initGlobalAnimations(opt);
	}

	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
	initGlobalAnimations(opt) {
		var controller = new ScrollMagic.Controller();
		var $container = $(opt.container);
		var selfTriggeredElems = opt.selfTriggeredElems;

		if($container.hasClass('is-animated')) {
			$.each(selfTriggeredElems, function(index, value) {
				$(value.selector).each(function() {
					new ScrollMagic.Scene({triggerElement: this, triggerHook: value.triggerHook, reverse: false})
						.setClassToggle(this, value.class)
						// .addIndicators({name: "2 (duration: 0)"})
						.addTo(controller);
				});
			});
		}
	}


}
