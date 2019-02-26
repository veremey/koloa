
$(function () {
	stickyHeader();
	slickStartscreen();
	slickProduct();
	slickWall('.wall-01');
	slickWall('.wall-02');
	slickWall('.full');

	slickAfterChange('.wall-01');
	slickAfterChange('.wall-02');
	slickOnInit('.wall-01');
	slickOnInit('.wall-02');

	slickSingle();
	slickGrid();

	var openPpp = $('.js-ppp');
	openPpp.on('click', openPPP );

	var closePpp = $('.ppp__screen');
	closePpp.on('click', closePPP );
	closePpp = $('.js-close');
	closePpp.on('click', closePPP );

	$( document ).on( 'keydown', function ( e ) {
		if ( e.keyCode === 27 ) {
			if($('.ppp').hasClass('is-active')){
				closePPP();
			}
		}
	});

	$('.js-next-section').on('click', scrollToNextSection );

	// burger
	$(".trigger").click(function() {
		$(this).toggleClass("is-active");
	});

	if($(document).width() < 1000){
		$('.header__wrap a').attr('aria-hidden', 'true');
		$('.header__wrap a').attr('tabindex', '-1');
	} else {
		$('.header__wrap a').attr('aria-hidden', 'false');
		$('.header__wrap a').attr('tabindex', '0');
	}

	// info
	showInfo();

//* --- youtube video ---*/

	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// map
	if($('#map').length){
		initMap();
	}

	// saelect

	$('select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
					$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});

}); // ready

$(window).on('resize', function() {
	 dotsPosition('.wall-01');
	 dotsPosition('.wall-02');
	 // dotsStartscreenPosition();
});

$(window).on('scroll', function() {
	stickyHeader();
});

function stickyHeader() {
	if($(window).scrollTop() > 20){
		$('.header').addClass('is-sticky');
	} else {
		$('.header').removeClass('is-sticky');
	}
}

function openPPP () {
	var pppName = $(this).data('ppp');

	$('.ppp, .ppp__body').removeClass('is-active');
	$('#' + pppName).addClass('is-active');
	$('.ppp').addClass('is-active');
}

function closePPP () {
	var video = $('.ppp__body').find('.video__media');

	if($('#player').length){
		player.stopVideo();
	}
	$('.ppp, .ppp__body').removeClass('is-active');
}

function scrollToNextSection (){
	var nextSection = $(this).parents('.section').next('.section');

	$('html, body').animate({
		scrollTop: nextSection.offset().top
	}, 1000, function() {
		nextSection.focus();
	});
}

function showInfo(){
	$('[data-info]').hover(
		function(){
			var showInEl = $(this).data('info');
			var infoParent = $(this).data('parent');
			var content = $(this).find('[data-text]').html();
			var showInfoBox = $(this).parents('.' + infoParent).find('.'+showInEl);

			showInfoBox.html(content);
			showInfoBox.addClass('is-active');
		},
		function(){
			var showInEl = $(this).data('info');
			var infoParent = $(this).data('parent');
			var content = $(this).find('[data-text]').html();
			var showInfoBox = $(this).parents('.' + infoParent).find('.'+showInEl);

			showInfoBox.html('');
			showInfoBox.removeClass('is-active');
		}
	);
}

//* --- youtube video ---*/
// https://developers.google.com/youtube/iframe_api_reference

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
	var player;

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		player.playVideo();
	}

	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	var done = false;
	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 6000);
			done = true;
		}
	}
	function stopVideo() {
		player.stopVideo();
	}
/*-----------------------------------------------------------*/



function slickStartscreen(){
	$('.startscreen__gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		prevArrow: $('.startscreen__arrow_left'),
		nextArrow: $('.startscreen__arrow_right'),
	});
};

function slickSingle(){
	var slickSlide = $('[data-singleSlide]');
	var getslickSlideItem = $('[data-singleSlide]').attr('data-singleSlide');
	var slickSlideItem = $('.' + getslickSlideItem);
	var slickSlideItemLength = $('.' + getslickSlideItem).length;

	slickSlide.each(function(){
		if(slickSlideItemLength > 1){
			$(this).slick({
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: $(this).parents('.section').find('.wall__arrow_left'),
				nextArrow: $(this).parents('.section').find('.wall__arrow_right')
			});
		}
	});
}

function slickGrid(){
	var slickSlide = $('[data-singlegrid]');
	var getslickSlideItem = $('[data-singlegrid]').attr('data-singlegrid');
	var slickSlideItem = $('.' + getslickSlideItem);


	slickSlide.each(function(){
		var slickSlideItemLength = $(this).find('.' + getslickSlideItem).length;

		if(slickSlideItemLength <= 4){
			$(this).parents('.section').find('.wall__arrows').addClass('is-hidden');
		}
		slickSlide.slick({
			rows: 2,
			slidesPerRow: 2,
			dots: false,
			arrows: true,
			prevArrow: slickSlide.parents('.section').find('.wall__arrow_left'),
			nextArrow: slickSlide.parents('.section').find('.wall__arrow_right')
		});

	});
}

function slickWall(el){
	var content = $(el).find('.wall__content_item');
	var picture = $(el).find('.wall__picture');
	if(content.length > 1){
		$(el).find('.wall__content').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			focusOnSelect: true,
			prevArrow: $(el).find('.wall__arrow_left'),
			nextArrow: $(el).find('.wall__arrow_right'),
			appendDots: $(el).find('.wall__dots'),
			asNavFor: $(el).find('.wall__picture')
		});
	}
	// if(picture.length > 1){
		$(el).find('.wall__picture').slick({
			asNavFor: $(el).find('.wall__content'),
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true
		});
	// }

};

function slickProduct(){
	$('.products').slick({
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4900,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		pauseOnHover: true,
		infinite: true,
		prevArrow: $('.products__arrow_left'),
		nextArrow: $('.products__arrow_right'),
		responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
				centerMode: false,
				}
			}
		]
	});
}

function findVideos(){
	var videos = document.querySelectorAll('.video');

	for (var i = 0; i <videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video){
	var link = video.querySelector('.video__link');
	var media = video.querySelector('.video__media');
	var btn = video.querySelector('.video__btn');
	var $videoBody = ('.video__body');
	var id = parseMediaUrl(media);

	video.addEventListener('click', function(){
		var iframe = createIframe(id);
		var width = media.clientWidth;
		var height = media.clientHeight;

		link.remove();
		btn.remove();
		video.appendChild(iframe);

		function onYouTubeIframeAPIReady() {
			player = new YT.Player('player', {
				height: height,
				width: '100%',
				videoId: '3fx3IDazJXI',
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}
		onYouTubeIframeAPIReady();

	});

	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaUrl(media){
	var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	var url = media.src;
	var match = url.match(regexp);

	return match[1];
}

function createIframe(id){
	var iframe = document.createElement('div');

	iframe.setAttribute("id", "player");;

	return iframe;
}

function generateUrl(id){
	var query = '?rel=0&showinfo=&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

function slickAfterChange(el){
	$(el).find('.wall__content').on('afterChange', function(slick, currentSlide){

		dotsPosition(el);
	});
}

function slickOnInit(el){
	$(el).find('.wall__content').on('init', function(slick){
		dotsPosition(el);
	});
}

function dotsPosition(el){
	var $eq = $(el).find('.slick-current').data('slick-index');
	var dots = $(el).find('.slick-current').find('.wall__dots');

	dots.find('li').eq($eq).addClass('slick-active');
}

function slickStartscreenInit(){
	$('.startscreen').find('.startscreen__box').on('init', function(slick){
		dotsStartscreenPosition();
	});
}

findVideos();


// MAP

function initMap() {
	var styledMapType = new google.maps.StyledMapType(
		[
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#46bcec"
					},
					{
						"visibility": "on"
					}
				]
			}
		],
		{name: 'Styled Map'});

	var uluru = {lat: 21.972572, lng: -159.390425};
	var center = {lat: 21.970845, lng: -159.360967};
	var centerMap = ($(document).width() > 800 ) ? center : uluru
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: centerMap
	});
	var image = 'static/img/content/icon-map.png';
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: image
		});

	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}
