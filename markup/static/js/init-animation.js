



function initGlobalAnimations(container, selfTriggeredElems) {
	var controller = new ScrollMagic.Controller();

	var $container = $('.' + container);
	var selfTriggeredElems = selfTriggeredElems;

	var tl = new TimelineMax();
	var scene;


	$('.page').addClass('scrollmagic-innited');

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

$(function () {
	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
	$(window).on('load', function() {

		var selfTriggeredElems = {
			el1: {
				selector: '.logo',
				triggerHook: 0.7,
				class: 'is-animated'
			},
			el2: {
				selector: '[data-stagger]',
				triggerHook: 0.7,
				class: 'is-animated'
			}
		};

		initGlobalAnimations( 'header', selfTriggeredElems );

		var selfTriggeredElems = {
			el1: {
				selector: '[data-stagger]',
				triggerHook: 0.7,
				class: 'is-animated'
			}
		};

		initGlobalAnimations( 'startscreen', selfTriggeredElems );

		var selfTriggeredElems = {
			el1: {
				selector: '.wall__picture',
				triggerHook: 1,
				class: 'is-animated'
			},
			el2: {
				selector: '.btn-play',
				triggerHook: 0.5,
				class: 'is-animated'
			},
			el3: {
				selector: '[data-stagger]',
				triggerHook: .95,
				class: 'is-animated'
			}
		};

		initGlobalAnimations( 'section', selfTriggeredElems );

		var selfTriggeredElems = {
			el1: {
				selector: '[data-stagger]',
				triggerHook: 0.8,
				class: 'is-animated'
			}
		};

		initGlobalAnimations( 'coin', selfTriggeredElems );

		var selfTriggeredElems = {
			el1: {
				selector: '[data-stagger]',
				triggerHook: 0.8,
				class: 'is-animated'
			}
		};

		initGlobalAnimations( 'section_buy ', selfTriggeredElems );


	});


});
