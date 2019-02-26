var Animation = new AnimationClass();

function AnimationClass() {
	var globalScope = this;

	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
	this.initGlobalAnimations = function(opt) {
		var controller = new ScrollMagic.Controller();

		var $container = $(opt.container);

		var selfTriggeredElems = opt.selfTriggeredElems;

		if($container.hasClass('is_animated')) {
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

	/* --- addClass duration ---*/
	/*--------------------------------------------------------------------*/
	this.addSomeClass = function(opt) {
		var $section = $(opt.section);
		var $duration = opt.duration;
		var $addClass = opt.addClass;
		var $youSure = opt.youSure;

		if($youSure){
			setTimeout( (function(section, addClass){
				return function(){
					$section.addClass($addClass);
				};
			})($section, $addClass), $duration);
		}

	}

	this.animateBox = function(opt) {
		// $(window).on('load', function() {
		if($('.article__box').length){

			var getFixedPosition = $('.article__figure').eq(0).offset().top;
			var setFixedPosition = getFixedPosition + $('.article__figure').eq(0).height() / 2 + 40;

			if($('.article__box.is_fixed').length){
				$('.article__box.is_fixed').css({
					'top' : setFixedPosition
				});
			}

			var boxStartPos = $(opt.box).offset().top - 40;
			var boxPosition = $('.contest__read').offset().top  - 80 ;

			$(window).on('scroll', function(){
				if($(opt.box).length ) {

					if(opt.fix){
						var boxFix = ($(window).scrollTop() < boxStartPos ) ? false :
												($(window).scrollTop() > boxPosition) ? false :
												true;

						if(boxFix) {
							var boxFixPosition = $(document).width()/2 + 100 - 755;
							$(opt.box).addClass('is_animated').css({
								'top' : '40px',
								'right' : boxFixPosition,
								'position' : 'fixed'
							});
						}
							else { $(opt.box).removeClass('is_animated').css({
								'position' : '',
								'right' : '',
								'top' : setFixedPosition
							});
						}

					} else {
						if($(window).scrollTop() > (boxStartPos - 300)){
							$(opt.box).addClass('is_animated');
						}
					}

				}


			});//scroll

		}//if

		//});//win load
	}


}
