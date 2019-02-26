/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/static/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./markup/static/js/ImageLoad.js":
/*!***************************************!*\
  !*** ./markup/static/js/ImageLoad.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageLoad; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoad =
/*#__PURE__*/
function () {
  function ImageLoad($wrapper) {
    _classCallCheck(this, ImageLoad);

    this.wrapper = $wrapper;
    this.width = $wrapper.height() * .72;
    this.height = $wrapper.height();
    this.src = $wrapper.data('src');
    this.mouseOn = false;
    this.animated = false;
    this.app = new PIXI.Application(this.width, this.height, {
      transparent: true
    });
    this.wrapper.append(this.app.view);
    this.container = new PIXI.Container();
    this.app.stage.addChild(this.container);
    this.load(this.startAnimation.bind(this));
  }

  _createClass(ImageLoad, [{
    key: "load",
    value: function load(afterLoad) {
      var that = this;
      var tmpImg = new Image();
      tmpImg.src = this.src;

      tmpImg.onload = function () {
        afterLoad();
        that.img = tmpImg;
      };
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var that = this; // console.log(this.img);

      this.bg = PIXI.Sprite.fromImage(that.src);
      this.bg.width = this.width;
      this.bg.height = this.height;
      this.bg.position.x = 0;
      this.bg.position.y = 0;
      this.container.addChild(this.bg);
      this.displacementSprite = PIXI.Sprite.fromImage('static/img/content/displacement.jpg');
      this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
      this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite); // this.displacementFilter.scale.set(1e4 + Math.random()*1000);
      // this.displacementSprite.scale.set(0.4 + 0.6*Math.random());

      this.app.stage.addChild(this.displacementSprite);
      this.container.filters = [this.displacementFilter];
      this.click();
      var tl = new TimelineMax({
        onComplete: function onComplete() {
          that.animated = true;
        }
      });
      tl.to(that.displacementFilter.scale, 1, {
        x: 1,
        y: 1
      });
      this.hover();
    }
  }, {
    key: "click",
    value: function click() {// let that = this;
      // this.wrapper.on('click',function() {
      // 	let tl = new TimelineMax({onComplete:function() {that.animated = true;}});
      // 	tl.to(that.displacementFilter.scale,1,{x:1,y:1});
      // });
    }
  }, {
    key: "hover",
    value: function hover() {
      var that = this;
      TweenMax.ticker.addEventListener('tick', that.doWaves, that);
      var tl = new TimelineMax();
      tl.to(that.displacementFilter.scale, 0.5, {
        x: 4,
        y: 8
      });
    }
  }, {
    key: "doWaves",
    value: function doWaves() {
      this.displacementSprite.x += 1;
    }
  }]);

  return ImageLoad;
}();



/***/ }),

/***/ "./markup/static/js/init-animation.js":
/*!********************************************!*\
  !*** ./markup/static/js/init-animation.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-cut').each(function () {
  var text = $(this).html().split(' '),
      len = text.length,
      result = [];

  for (var i = 0; i < len; i++) {
    result[i] = '<span class="hidden-title" data-stagger><span>' + text[i] + '</span></span>';
  }

  $(this).html(result.join(' '));
});

function initGlobalAnimations(container, selfTriggeredElems) {
  var controller = new ScrollMagic.Controller();
  var $container = $('.' + container);
  var selfTriggeredElems = selfTriggeredElems;
  var tl = new TimelineMax();
  var scene;
  $('.page').addClass('scrollmagic-innited');

  if ($container.hasClass('is-animated')) {
    $.each(selfTriggeredElems, function (index, value) {
      $(value.selector).each(function () {
        new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: value.triggerHook,
          reverse: false
        }).setClassToggle(this, value.class) // .addIndicators({name: "2 (duration: 0)"})
        .addTo(controller);
      });
    });
  }
}

$(function () {
  /*--- global animations init ---*/

  /*---------------------------------------------------------------------*/
  $(window).on('load', function () {
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
    initGlobalAnimations('header', selfTriggeredElems);
    var selfTriggeredElems = {
      el1: {
        selector: '[data-stagger]',
        triggerHook: 0.7,
        class: 'is-animated'
      }
    };
    initGlobalAnimations('startscreen', selfTriggeredElems);
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
    initGlobalAnimations('section', selfTriggeredElems);
    var selfTriggeredElems = {
      el1: {
        selector: '[data-stagger]',
        triggerHook: 0.9,
        class: 'is-animated'
      }
    };
    initGlobalAnimations('coin', selfTriggeredElems);
    var selfTriggeredElems = {
      el1: {
        selector: '[data-stagger]',
        triggerHook: 0.8,
        class: 'is-animated'
      }
    };
    initGlobalAnimations('section_buy ', selfTriggeredElems);
  });
});

/***/ }),

/***/ "./markup/static/js/main.js":
/*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageLoad */ "./markup/static/js/ImageLoad.js");
/* harmony import */ var _init_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-animation */ "./markup/static/js/init-animation.js");
/* harmony import */ var _init_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_init_animation__WEBPACK_IMPORTED_MODULE_1__);

 // pixi animations

var targets = document.querySelectorAll('.js-loadme');
var options = {
  rootMargin: '0px',
  threshold: [0, 1]
};
var observer = new IntersectionObserver(function (items) {
  // console.log(items);
  items.forEach(function (el) {
    if (el.isIntersecting && el.intersectionRatio > 0) {
      if (!$(el.target).hasClass('is-init')) {
        $(el.target).addClass('is-init');
        new _ImageLoad__WEBPACK_IMPORTED_MODULE_0__["default"]($(el.target)); // console.log('intersected',el.target);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9JbWFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9pbml0LWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanMiXSwibmFtZXMiOlsiSW1hZ2VMb2FkIiwiJHdyYXBwZXIiLCJ3cmFwcGVyIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJkYXRhIiwibW91c2VPbiIsImFuaW1hdGVkIiwiYXBwIiwiUElYSSIsIkFwcGxpY2F0aW9uIiwidHJhbnNwYXJlbnQiLCJhcHBlbmQiLCJ2aWV3IiwiY29udGFpbmVyIiwiQ29udGFpbmVyIiwic3RhZ2UiLCJhZGRDaGlsZCIsImxvYWQiLCJzdGFydEFuaW1hdGlvbiIsImJpbmQiLCJhZnRlckxvYWQiLCJ0aGF0IiwidG1wSW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJpbWciLCJiZyIsIlNwcml0ZSIsImZyb21JbWFnZSIsInBvc2l0aW9uIiwieCIsInkiLCJkaXNwbGFjZW1lbnRTcHJpdGUiLCJ0ZXh0dXJlIiwiYmFzZVRleHR1cmUiLCJ3cmFwTW9kZSIsIldSQVBfTU9ERVMiLCJSRVBFQVQiLCJkaXNwbGFjZW1lbnRGaWx0ZXIiLCJmaWx0ZXJzIiwiRGlzcGxhY2VtZW50RmlsdGVyIiwiY2xpY2siLCJ0bCIsIlRpbWVsaW5lTWF4Iiwib25Db21wbGV0ZSIsInRvIiwic2NhbGUiLCJob3ZlciIsIlR3ZWVuTWF4IiwidGlja2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvV2F2ZXMiLCIkIiwiZWFjaCIsInRleHQiLCJodG1sIiwic3BsaXQiLCJsZW4iLCJsZW5ndGgiLCJyZXN1bHQiLCJpIiwiam9pbiIsImluaXRHbG9iYWxBbmltYXRpb25zIiwic2VsZlRyaWdnZXJlZEVsZW1zIiwiY29udHJvbGxlciIsIlNjcm9sbE1hZ2ljIiwiQ29udHJvbGxlciIsIiRjb250YWluZXIiLCJzY2VuZSIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJpbmRleCIsInZhbHVlIiwic2VsZWN0b3IiLCJTY2VuZSIsInRyaWdnZXJFbGVtZW50IiwidHJpZ2dlckhvb2siLCJyZXZlcnNlIiwic2V0Q2xhc3NUb2dnbGUiLCJjbGFzcyIsImFkZFRvIiwid2luZG93Iiwib24iLCJlbDEiLCJlbDIiLCJlbDMiLCJ0YXJnZXRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXRlbXMiLCJmb3JFYWNoIiwiZWwiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidGFyZ2V0IiwiSW1hZ2VMb2FkZXIiLCJvYnNlcnZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TyxDQUFDMUIsQ0FBRCxDQUF4QjtBQUNBOztBQUVEUixDQUFDLENBQUM2QixNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBWTtBQUNsQyxPQUFLLElBQUl0QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEIsT0FBTyxDQUFDNUIsTUFBNUIsRUFBb0NFLENBQUMsRUFBckMsRUFBeUM7QUFDeENnQyxZQUFRLENBQUNTLE9BQVQsQ0FBaUJmLE9BQU8sQ0FBQzFCLENBQUQsQ0FBeEI7QUFDQTtBQUNELENBSkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanNcIik7XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTG9hZCB7XG4gIGNvbnN0cnVjdG9yKCR3cmFwcGVyKSB7XG5cbiAgXHR0aGlzLndyYXBwZXIgPSAkd3JhcHBlcjtcbiAgXHR0aGlzLndpZHRoID0gJHdyYXBwZXIuaGVpZ2h0KCkgKiAuNzI7XG4gIFx0dGhpcy5oZWlnaHQgPSAkd3JhcHBlci5oZWlnaHQoKTtcbiAgXHR0aGlzLnNyYyA9ICR3cmFwcGVyLmRhdGEoJ3NyYycpO1xuICBcdHRoaXMubW91c2VPbiA9IGZhbHNlO1xuICBcdHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcblxuICBcdHRoaXMuYXBwID0gbmV3IFBJWEkuQXBwbGljYXRpb24odGhpcy53aWR0aCx0aGlzLmhlaWdodCx7dHJhbnNwYXJlbnQ6IHRydWV9KTtcblxuICBcdHRoaXMud3JhcHBlci5hcHBlbmQodGhpcy5hcHAudmlldyk7XG5cbiAgXHR0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICBcdHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcblxuICBcdHRoaXMubG9hZCh0aGlzLnN0YXJ0QW5pbWF0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbG9hZChhZnRlckxvYWQpIHtcbiAgXHRsZXQgdGhhdCA9IHRoaXM7XG4gIFx0bGV0IHRtcEltZyA9IG5ldyBJbWFnZSgpO1xuICBcdHRtcEltZy5zcmMgPSB0aGlzLnNyYztcbiAgXHR0bXBJbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIFx0XHRhZnRlckxvYWQoKTtcbiAgXHRcdHRoYXQuaW1nID0gdG1wSW1nO1xuICBcdH07XG4gIH1cblxuICBzdGFydEFuaW1hdGlvbigpIHtcbiAgXHRsZXQgdGhhdCA9IHRoaXM7XG4gIFx0Ly8gY29uc29sZS5sb2codGhpcy5pbWcpO1xuICBcdHRoaXMuYmcgPSBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UodGhhdC5zcmMpO1xuICBcdHRoaXMuYmcud2lkdGggPSB0aGlzLndpZHRoO1xuICBcdHRoaXMuYmcuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gIFx0dGhpcy5iZy5wb3NpdGlvbi54ID0gMDtcbiAgXHR0aGlzLmJnLnBvc2l0aW9uLnkgPSAwO1xuICBcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuYmcpO1xuXG4gICAgdGhpcy5kaXNwbGFjZW1lbnRTcHJpdGUgPSBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoJ3N0YXRpYy9pbWcvY29udGVudC9kaXNwbGFjZW1lbnQuanBnJyk7XG5cbiAgXHR0aGlzLmRpc3BsYWNlbWVudFNwcml0ZS50ZXh0dXJlLmJhc2VUZXh0dXJlLndyYXBNb2RlID0gUElYSS5XUkFQX01PREVTLlJFUEVBVDtcbiAgXHR0aGlzLmRpc3BsYWNlbWVudEZpbHRlciA9IG5ldyBQSVhJLmZpbHRlcnMuRGlzcGxhY2VtZW50RmlsdGVyKFxuICBcdCAgdGhpcy5kaXNwbGFjZW1lbnRTcHJpdGVcbiAgXHQpO1xuICBcdC8vIHRoaXMuZGlzcGxhY2VtZW50RmlsdGVyLnNjYWxlLnNldCgxZTQgKyBNYXRoLnJhbmRvbSgpKjEwMDApO1xuICBcdC8vIHRoaXMuZGlzcGxhY2VtZW50U3ByaXRlLnNjYWxlLnNldCgwLjQgKyAwLjYqTWF0aC5yYW5kb20oKSk7XG5cbiAgXHR0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmRpc3BsYWNlbWVudFNwcml0ZSk7XG5cbiAgXHR0aGlzLmNvbnRhaW5lci5maWx0ZXJzID0gW3RoaXMuZGlzcGxhY2VtZW50RmlsdGVyXTtcbiAgXHR0aGlzLmNsaWNrKCk7XG4gIFx0bGV0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHtvbkNvbXBsZXRlOmZ1bmN0aW9uKCkge3RoYXQuYW5pbWF0ZWQgPSB0cnVlO319KTtcbiAgXHRcdHRsLnRvKHRoYXQuZGlzcGxhY2VtZW50RmlsdGVyLnNjYWxlLDEse3g6MSx5OjF9KTtcbiAgXHR0aGlzLmhvdmVyKCk7XG4gIH1cblxuICBjbGljaygpIHtcbiAgXHQvLyBsZXQgdGhhdCA9IHRoaXM7XG4gIFx0Ly8gdGhpcy53cmFwcGVyLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gIFx0Ly8gXHRsZXQgdGwgPSBuZXcgVGltZWxpbmVNYXgoe29uQ29tcGxldGU6ZnVuY3Rpb24oKSB7dGhhdC5hbmltYXRlZCA9IHRydWU7fX0pO1xuICBcdC8vIFx0dGwudG8odGhhdC5kaXNwbGFjZW1lbnRGaWx0ZXIuc2NhbGUsMSx7eDoxLHk6MX0pO1xuICBcdC8vIH0pO1xuICB9XG4gIGhvdmVyKCkge1xuICBcdGxldCB0aGF0ID0gdGhpcztcblxuICAgIFR3ZWVuTWF4LnRpY2tlci5hZGRFdmVudExpc3RlbmVyKCd0aWNrJyx0aGF0LmRvV2F2ZXMsIHRoYXQpO1xuICAgIGxldCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHRsLnRvKHRoYXQuZGlzcGxhY2VtZW50RmlsdGVyLnNjYWxlLDAuNSx7eDo0LHk6OH0pO1xuXG4gIH1cblxuICBkb1dhdmVzKCkge1xuICBcdHRoaXMuZGlzcGxhY2VtZW50U3ByaXRlLnggKz0gMTtcbiAgfVxufSIsIlxuXG5cbiQoJy5qcy1jdXQnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRleHQgPSAkKHRoaXMpLmh0bWwoKS5zcGxpdCgnICcpLFxuICAgICAgICBsZW4gPSB0ZXh0Lmxlbmd0aCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICByZXN1bHRbaV0gPSAnPHNwYW4gY2xhc3M9XCJoaWRkZW4tdGl0bGVcIiBkYXRhLXN0YWdnZXI+PHNwYW4+JyArIHRleHRbaV0gKyAnPC9zcGFuPjwvc3Bhbj4nO1xuICAgIH1cbiAgICAkKHRoaXMpLmh0bWwocmVzdWx0LmpvaW4oJyAnKSk7XG59KTtcblxuXG5mdW5jdGlvbiBpbml0R2xvYmFsQW5pbWF0aW9ucyhjb250YWluZXIsIHNlbGZUcmlnZ2VyZWRFbGVtcykge1xuXHR2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cblx0dmFyICRjb250YWluZXIgPSAkKCcuJyArIGNvbnRhaW5lcik7XG5cdHZhciBzZWxmVHJpZ2dlcmVkRWxlbXMgPSBzZWxmVHJpZ2dlcmVkRWxlbXM7XG5cblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cdHZhciBzY2VuZTtcblxuXG5cdCQoJy5wYWdlJykuYWRkQ2xhc3MoJ3Njcm9sbG1hZ2ljLWlubml0ZWQnKTtcblxuXHRpZigkY29udGFpbmVyLmhhc0NsYXNzKCdpcy1hbmltYXRlZCcpKSB7XG5cdFx0JC5lYWNoKHNlbGZUcmlnZ2VyZWRFbGVtcywgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG5cdFx0XHQkKHZhbHVlLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe3RyaWdnZXJFbGVtZW50OiB0aGlzLCB0cmlnZ2VySG9vazogdmFsdWUudHJpZ2dlckhvb2ssIHJldmVyc2U6IGZhbHNlfSlcblx0XHRcdFx0XHQuc2V0Q2xhc3NUb2dnbGUodGhpcywgdmFsdWUuY2xhc3MpXG5cdFx0XHRcdFx0Ly8gLmFkZEluZGljYXRvcnMoe25hbWU6IFwiMiAoZHVyYXRpb246IDApXCJ9KVxuXHRcdFx0XHRcdC5hZGRUbyhjb250cm9sbGVyKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuXHQvKi0tLSBnbG9iYWwgYW5pbWF0aW9ucyBpbml0IC0tLSovXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgc2VsZlRyaWdnZXJlZEVsZW1zID0ge1xuXHRcdFx0ZWwxOiB7XG5cdFx0XHRcdHNlbGVjdG9yOiAnLmxvZ28nLFxuXHRcdFx0XHR0cmlnZ2VySG9vazogMC43LFxuXHRcdFx0XHRjbGFzczogJ2lzLWFuaW1hdGVkJ1xuXHRcdFx0fSxcblx0XHRcdGVsMjoge1xuXHRcdFx0XHRzZWxlY3RvcjogJ1tkYXRhLXN0YWdnZXJdJyxcblx0XHRcdFx0dHJpZ2dlckhvb2s6IDAuNyxcblx0XHRcdFx0Y2xhc3M6ICdpcy1hbmltYXRlZCdcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aW5pdEdsb2JhbEFuaW1hdGlvbnMoICdoZWFkZXInLCBzZWxmVHJpZ2dlcmVkRWxlbXMgKTtcblxuXHRcdHZhciBzZWxmVHJpZ2dlcmVkRWxlbXMgPSB7XG5cdFx0XHRlbDE6IHtcblx0XHRcdFx0c2VsZWN0b3I6ICdbZGF0YS1zdGFnZ2VyXScsXG5cdFx0XHRcdHRyaWdnZXJIb29rOiAwLjcsXG5cdFx0XHRcdGNsYXNzOiAnaXMtYW5pbWF0ZWQnXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGluaXRHbG9iYWxBbmltYXRpb25zKCAnc3RhcnRzY3JlZW4nLCBzZWxmVHJpZ2dlcmVkRWxlbXMgKTtcblxuXHRcdHZhciBzZWxmVHJpZ2dlcmVkRWxlbXMgPSB7XG5cdFx0XHRlbDE6IHtcblx0XHRcdFx0c2VsZWN0b3I6ICcud2FsbF9fcGljdHVyZScsXG5cdFx0XHRcdHRyaWdnZXJIb29rOiAxLFxuXHRcdFx0XHRjbGFzczogJ2lzLWFuaW1hdGVkJ1xuXHRcdFx0fSxcblx0XHRcdGVsMjoge1xuXHRcdFx0XHRzZWxlY3RvcjogJy5idG4tcGxheScsXG5cdFx0XHRcdHRyaWdnZXJIb29rOiAwLjUsXG5cdFx0XHRcdGNsYXNzOiAnaXMtYW5pbWF0ZWQnXG5cdFx0XHR9LFxuXHRcdFx0ZWwzOiB7XG5cdFx0XHRcdHNlbGVjdG9yOiAnW2RhdGEtc3RhZ2dlcl0nLFxuXHRcdFx0XHR0cmlnZ2VySG9vazogLjk1LFxuXHRcdFx0XHRjbGFzczogJ2lzLWFuaW1hdGVkJ1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpbml0R2xvYmFsQW5pbWF0aW9ucyggJ3NlY3Rpb24nLCBzZWxmVHJpZ2dlcmVkRWxlbXMgKTtcblxuXHRcdHZhciBzZWxmVHJpZ2dlcmVkRWxlbXMgPSB7XG5cdFx0XHRlbDE6IHtcblx0XHRcdFx0c2VsZWN0b3I6ICdbZGF0YS1zdGFnZ2VyXScsXG5cdFx0XHRcdHRyaWdnZXJIb29rOiAwLjksXG5cdFx0XHRcdGNsYXNzOiAnaXMtYW5pbWF0ZWQnXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGluaXRHbG9iYWxBbmltYXRpb25zKCAnY29pbicsIHNlbGZUcmlnZ2VyZWRFbGVtcyApO1xuXG5cdFx0dmFyIHNlbGZUcmlnZ2VyZWRFbGVtcyA9IHtcblx0XHRcdGVsMToge1xuXHRcdFx0XHRzZWxlY3RvcjogJ1tkYXRhLXN0YWdnZXJdJyxcblx0XHRcdFx0dHJpZ2dlckhvb2s6IDAuOCxcblx0XHRcdFx0Y2xhc3M6ICdpcy1hbmltYXRlZCdcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aW5pdEdsb2JhbEFuaW1hdGlvbnMoICdzZWN0aW9uX2J1eSAnLCBzZWxmVHJpZ2dlcmVkRWxlbXMgKTtcblxuXG5cblx0fSk7XG5cblxufSk7XG4iLCJcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tICcuL0ltYWdlTG9hZCc7XG5pbXBvcnQgaW5pdGFuaW1hdGlvbiBmcm9tICcuL2luaXQtYW5pbWF0aW9uJztcblxuXG4vLyBwaXhpIGFuaW1hdGlvbnNcbnZhciB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWxvYWRtZScpO1xuXG52YXIgb3B0aW9ucyA9IHtcblx0cm9vdE1hcmdpbjogJzBweCcsXG5cdHRocmVzaG9sZDogWzAsMV1cbn07XG5cbnZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihpdGVtcyA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKGl0ZW1zKTtcblx0aXRlbXMuZm9yRWFjaChlbCA9PiB7XG5cblx0XHRpZihlbC5pc0ludGVyc2VjdGluZyAmJiBlbC5pbnRlcnNlY3Rpb25SYXRpbz4wKSB7XG5cdFx0XHRpZighJChlbC50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbml0JykpIHtcblx0XHRcdFx0JChlbC50YXJnZXQpLmFkZENsYXNzKCdpcy1pbml0Jyk7XG5cdFx0XHRcdG5ldyBJbWFnZUxvYWRlcigkKGVsLnRhcmdldCkpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnaW50ZXJzZWN0ZWQnLGVsLnRhcmdldCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn0sIG9wdGlvbnMpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcblx0b2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXRzW2ldKTtcbn1cblxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdG9ic2VydmVyLm9ic2VydmUodGFyZ2V0c1tpXSk7XG5cdH1cbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9