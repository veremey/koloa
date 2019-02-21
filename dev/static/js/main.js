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
        triggerHook: 0.8,
        class: 'is-animated'
      }
    };
    initGlobalAnimations('section', selfTriggeredElems);
    var selfTriggeredElems = {
      el1: {
        selector: '[data-stagger]',
        triggerHook: 0.8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9JbWFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9pbml0LWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanMiXSwibmFtZXMiOlsiSW1hZ2VMb2FkIiwiJHdyYXBwZXIiLCJ3cmFwcGVyIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJkYXRhIiwibW91c2VPbiIsImFuaW1hdGVkIiwiYXBwIiwiUElYSSIsIkFwcGxpY2F0aW9uIiwidHJhbnNwYXJlbnQiLCJhcHBlbmQiLCJ2aWV3IiwiY29udGFpbmVyIiwiQ29udGFpbmVyIiwic3RhZ2UiLCJhZGRDaGlsZCIsImxvYWQiLCJzdGFydEFuaW1hdGlvbiIsImJpbmQiLCJhZnRlckxvYWQiLCJ0aGF0IiwidG1wSW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJpbWciLCJiZyIsIlNwcml0ZSIsImZyb21JbWFnZSIsInBvc2l0aW9uIiwieCIsInkiLCJkaXNwbGFjZW1lbnRTcHJpdGUiLCJ0ZXh0dXJlIiwiYmFzZVRleHR1cmUiLCJ3cmFwTW9kZSIsIldSQVBfTU9ERVMiLCJSRVBFQVQiLCJkaXNwbGFjZW1lbnRGaWx0ZXIiLCJmaWx0ZXJzIiwiRGlzcGxhY2VtZW50RmlsdGVyIiwiY2xpY2siLCJ0bCIsIlRpbWVsaW5lTWF4Iiwib25Db21wbGV0ZSIsInRvIiwic2NhbGUiLCJob3ZlciIsIlR3ZWVuTWF4IiwidGlja2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvV2F2ZXMiLCJpbml0R2xvYmFsQW5pbWF0aW9ucyIsInNlbGZUcmlnZ2VyZWRFbGVtcyIsImNvbnRyb2xsZXIiLCJTY3JvbGxNYWdpYyIsIkNvbnRyb2xsZXIiLCIkY29udGFpbmVyIiwiJCIsInNjZW5lIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImVhY2giLCJpbmRleCIsInZhbHVlIiwic2VsZWN0b3IiLCJTY2VuZSIsInRyaWdnZXJFbGVtZW50IiwidHJpZ2dlckhvb2siLCJyZXZlcnNlIiwic2V0Q2xhc3NUb2dnbGUiLCJjbGFzcyIsImFkZFRvIiwid2luZG93Iiwib24iLCJlbDEiLCJlbDIiLCJlbDMiLCJ0YXJnZXRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXRlbXMiLCJmb3JFYWNoIiwiZWwiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidGFyZ2V0IiwiSW1hZ2VMb2FkZXIiLCJpIiwibGVuZ3RoIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakZxQkEsUzs7O0FBQ25CLHFCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FB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QTdDLEVBQWdEO0FBQy9DLFVBQUcsQ0FBQ2hDLENBQUMsQ0FBQzhCLEVBQUUsQ0FBQ0csTUFBSixDQUFELENBQWE5QixRQUFiLENBQXNCLFNBQXRCLENBQUosRUFBc0M7QUFDckNILFNBQUMsQ0FBQzhCLEVBQUUsQ0FBQ0csTUFBSixDQUFELENBQWEvQixRQUFiLENBQXNCLFNBQXRCO0FBQ0EsWUFBSWdDLGtEQUFKLENBQWdCbEMsQ0FBQyxDQUFDOEIsRUFBRSxDQUFDRyxNQUFKLENBQWpCLEVBRnFDLENBR3JDO0FBQ0E7QUFDRDtBQUNELEdBVEQ7QUFVQSxDQVpjLEVBWVpWLE9BWlksQ0FBZjs7QUFjQSxLQUFLLElBQUlZLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdmLE9BQU8sQ0FBQ2dCLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3hDVCxVQUFRLENBQUNXLE9BQVQsQ0FBaUJqQixPQUFPLENBQUNlLENBQUQsQ0FBeEI7QUFDQTs7QUFFRG5DLENBQUMsQ0FBQ2UsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVk7QUFDbEMsT0FBSyxJQUFJbUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2YsT0FBTyxDQUFDZ0IsTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDeENULFlBQVEsQ0FBQ1csT0FBVCxDQUFpQmpCLE9BQU8sQ0FBQ2UsQ0FBRCxDQUF4QjtBQUNBO0FBQ0QsQ0FKRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qc1wiKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VMb2FkIHtcbiAgY29uc3RydWN0b3IoJHdyYXBwZXIpIHtcblxuICBcdHRoaXMud3JhcHBlciA9ICR3cmFwcGVyO1xuICBcdHRoaXMud2lkdGggPSAkd3JhcHBlci5oZWlnaHQoKSAqIC43MjtcbiAgXHR0aGlzLmhlaWdodCA9ICR3cmFwcGVyLmhlaWdodCgpO1xuICBcdHRoaXMuc3JjID0gJHdyYXBwZXIuZGF0YSgnc3JjJyk7XG4gIFx0dGhpcy5tb3VzZU9uID0gZmFsc2U7XG4gIFx0dGhpcy5hbmltYXRlZCA9IGZhbHNlO1xuXG4gIFx0dGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0LHt0cmFuc3BhcmVudDogdHJ1ZX0pO1xuXG4gIFx0dGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmFwcC52aWV3KTtcblxuICBcdHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gIFx0dGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gIFx0dGhpcy5sb2FkKHRoaXMuc3RhcnRBbmltYXRpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICBsb2FkKGFmdGVyTG9hZCkge1xuICBcdGxldCB0aGF0ID0gdGhpcztcbiAgXHRsZXQgdG1wSW1nID0gbmV3IEltYWdlKCk7XG4gIFx0dG1wSW1nLnNyYyA9IHRoaXMuc3JjO1xuICBcdHRtcEltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgXHRcdGFmdGVyTG9hZCgpO1xuICBcdFx0dGhhdC5pbWcgPSB0bXBJbWc7XG4gIFx0fTtcbiAgfVxuXG4gIHN0YXJ0QW5pbWF0aW9uKCkge1xuICBcdGxldCB0aGF0ID0gdGhpcztcbiAgXHQvLyBjb25zb2xlLmxvZyh0aGlzLmltZyk7XG4gIFx0dGhpcy5iZyA9IFBJWEkuU3ByaXRlLmZyb21JbWFnZSh0aGF0LnNyYyk7XG4gIFx0dGhpcy5iZy53aWR0aCA9IHRoaXMud2lkdGg7XG4gIFx0dGhpcy5iZy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgXHR0aGlzLmJnLnBvc2l0aW9uLnggPSAwO1xuICBcdHRoaXMuYmcucG9zaXRpb24ueSA9IDA7XG4gIFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5iZyk7XG5cbiAgICB0aGlzLmRpc3BsYWNlbWVudFNwcml0ZSA9IFBJWEkuU3ByaXRlLmZyb21JbWFnZSgnc3RhdGljL2ltZy9jb250ZW50L2Rpc3BsYWNlbWVudC5qcGcnKTtcblxuICBcdHRoaXMuZGlzcGxhY2VtZW50U3ByaXRlLnRleHR1cmUuYmFzZVRleHR1cmUud3JhcE1vZGUgPSBQSVhJLldSQVBfTU9ERVMuUkVQRUFUO1xuICBcdHRoaXMuZGlzcGxhY2VtZW50RmlsdGVyID0gbmV3IFBJWEkuZmlsdGVycy5EaXNwbGFjZW1lbnRGaWx0ZXIoXG4gIFx0ICB0aGlzLmRpc3BsYWNlbWVudFNwcml0ZVxuICBcdCk7XG4gIFx0Ly8gdGhpcy5kaXNwbGFjZW1lbnRGaWx0ZXIuc2NhbGUuc2V0KDFlNCArIE1hdGgucmFuZG9tKCkqMTAwMCk7XG4gIFx0Ly8gdGhpcy5kaXNwbGFjZW1lbnRTcHJpdGUuc2NhbGUuc2V0KDAuNCArIDAuNipNYXRoLnJhbmRvbSgpKTtcblxuICBcdHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuZGlzcGxhY2VtZW50U3ByaXRlKTtcblxuICBcdHRoaXMuY29udGFpbmVyLmZpbHRlcnMgPSBbdGhpcy5kaXNwbGFjZW1lbnRGaWx0ZXJdO1xuICBcdHRoaXMuY2xpY2soKTtcbiAgXHRsZXQgdGwgPSBuZXcgVGltZWxpbmVNYXgoe29uQ29tcGxldGU6ZnVuY3Rpb24oKSB7dGhhdC5hbmltYXRlZCA9IHRydWU7fX0pO1xuICBcdFx0dGwudG8odGhhdC5kaXNwbGFjZW1lbnRGaWx0ZXIuc2NhbGUsMSx7eDoxLHk6MX0pO1xuICBcdHRoaXMuaG92ZXIoKTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICBcdC8vIGxldCB0aGF0ID0gdGhpcztcbiAgXHQvLyB0aGlzLndyYXBwZXIub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgXHQvLyBcdGxldCB0bCA9IG5ldyBUaW1lbGluZU1heCh7b25Db21wbGV0ZTpmdW5jdGlvbigpIHt0aGF0LmFuaW1hdGVkID0gdHJ1ZTt9fSk7XG4gIFx0Ly8gXHR0bC50byh0aGF0LmRpc3BsYWNlbWVudEZpbHRlci5zY2FsZSwxLHt4OjEseToxfSk7XG4gIFx0Ly8gfSk7XG4gIH1cbiAgaG92ZXIoKSB7XG4gIFx0bGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgVHdlZW5NYXgudGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLHRoYXQuZG9XYXZlcywgdGhhdCk7XG4gICAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdGwudG8odGhhdC5kaXNwbGFjZW1lbnRGaWx0ZXIuc2NhbGUsMC41LHt4OjQseTo4fSk7XG5cbiAgfVxuXG4gIGRvV2F2ZXMoKSB7XG4gIFx0dGhpcy5kaXNwbGFjZW1lbnRTcHJpdGUueCArPSAxO1xuICB9XG59IiwiXG5cblxuXG5mdW5jdGlvbiBpbml0R2xvYmFsQW5pbWF0aW9ucyhjb250YWluZXIsIHNlbGZUcmlnZ2VyZWRFbGVtcykge1xuXHR2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cblx0dmFyICRjb250YWluZXIgPSAkKCcuJyArIGNvbnRhaW5lcik7XG5cdHZhciBzZWxmVHJpZ2dlcmVkRWxlbXMgPSBzZWxmVHJpZ2dlcmVkRWxlbXM7XG5cblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cdHZhciBzY2VuZTtcblxuXG5cdCQoJy5wYWdlJykuYWRkQ2xhc3MoJ3Njcm9sbG1hZ2ljLWlubml0ZWQnKTtcblxuXHRpZigkY29udGFpbmVyLmhhc0NsYXNzKCdpcy1hbmltYXRlZCcpKSB7XG5cdFx0JC5lYWNoKHNlbGZUcmlnZ2VyZWRFbGVtcywgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG5cdFx0XHQkKHZhbHVlLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe3RyaWdnZXJFbGVtZW50OiB0aGlzLCB0cmlnZ2VySG9vazogdmFsdWUudHJpZ2dlckhvb2ssIHJldmVyc2U6IGZhbHNlfSlcblx0XHRcdFx0XHQuc2V0Q2xhc3NUb2dnbGUodGhpcywgdmFsdWUuY2xhc3MpXG5cdFx0XHRcdFx0Ly8gLmFkZEluZGljYXRvcnMoe25hbWU6IFwiMiAoZHVyYXRpb246IDApXCJ9KVxuXHRcdFx0XHRcdC5hZGRUbyhjb250cm9sbGVyKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuXHQvKi0tLSBnbG9iYWwgYW5pbWF0aW9ucyBpbml0IC0tLSovXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgc2VsZlRyaWdnZXJlZEVsZW1zID0ge1xuXHRcdFx0ZWwxOiB7XG5cdFx0XHRcdHNlbGVjdG9yOiAnLmxvZ28nLFxuXHRcdFx0XHR0cmlnZ2VySG9vazogMC43LFxuXHRcdFx0XHRjbGFzczogJ2lzLWFuaW1hdGVkJ1xuXHRcdFx0fSxcblx0XHRcdGVsMjoge1xuXHRcdFx0XHRzZWxlY3RvcjogJ1tkYXRhLXN0YWdnZXJdJyxcblx0XHRcdFx0dHJpZ2dlckhvb2s6IDAuNyxcblx0XHRcdFx0Y2xhc3M6ICdpcy1hbmltYXRlZCdcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aW5pdEdsb2JhbEFuaW1hdGlvbnMoICdoZWFkZXInLCBzZWxmVHJpZ2dlcmVkRWxlbXMgKTtcblxuXHRcdHZhciBzZWxmVHJpZ2dlcmVkRWxlbXMgPSB7XG5cdFx0XHRlbDE6IHtcblx0XHRcdFx0c2VsZWN0b3I6ICdbZGF0YS1zdGFnZ2VyXScsXG5cdFx0XHRcdHRyaWdnZXJIb29rOiAwLjcsXG5cdFx0XHRcdGNsYXNzOiAnaXMtYW5pbWF0ZWQnXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGluaXRHbG9iYWxBbmltYXRpb25zKCAnc3RhcnRzY3JlZW4nLCBzZWxmVHJpZ2dlcmVkRWxlbXMgKTtcblxuXHRcdHZhciBzZWxmVHJpZ2dlcmVkRWxlbXMgPSB7XG5cdFx0XHRlbDE6IHtcblx0XHRcdFx0c2VsZWN0b3I6ICcud2FsbF9fcGljdHVyZScsXG5cdFx0XHRcdHRyaWdnZXJIb29rOiAxLFxuXHRcdFx0XHRjbGFzczogJ2lzLWFuaW1hdGVkJ1xuXHRcdFx0fSxcblx0XHRcdGVsMjoge1xuXHRcdFx0XHRzZWxlY3RvcjogJy5idG4tcGxheScsXG5cdFx0XHRcdHRyaWdnZXJIb29rOiAwLjUsXG5cdFx0XHRcdGNsYXNzOiAnaXMtYW5pbWF0ZWQnXG5cdFx0XHR9LFxuXHRcdFx0ZWwzOiB7XG5cdFx0XHRcdHNlbGVjdG9yOiAnW2RhdGEtc3RhZ2dlcl0nLFxuXHRcdFx0XHR0cmlnZ2VySG9vazogMC44LFxuXHRcdFx0XHRjbGFzczogJ2lzLWFuaW1hdGVkJ1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpbml0R2xvYmFsQW5pbWF0aW9ucyggJ3NlY3Rpb24nLCBzZWxmVHJpZ2dlcmVkRWxlbXMgKTtcblxuXHRcdHZhciBzZWxmVHJpZ2dlcmVkRWxlbXMgPSB7XG5cdFx0XHRlbDE6IHtcblx0XHRcdFx0c2VsZWN0b3I6ICdbZGF0YS1zdGFnZ2VyXScsXG5cdFx0XHRcdHRyaWdnZXJIb29rOiAwLjgsXG5cdFx0XHRcdGNsYXNzOiAnaXMtYW5pbWF0ZWQnXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGluaXRHbG9iYWxBbmltYXRpb25zKCAnY29pbicsIHNlbGZUcmlnZ2VyZWRFbGVtcyApO1xuXG5cdFx0dmFyIHNlbGZUcmlnZ2VyZWRFbGVtcyA9IHtcblx0XHRcdGVsMToge1xuXHRcdFx0XHRzZWxlY3RvcjogJ1tkYXRhLXN0YWdnZXJdJyxcblx0XHRcdFx0dHJpZ2dlckhvb2s6IDAuOCxcblx0XHRcdFx0Y2xhc3M6ICdpcy1hbmltYXRlZCdcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aW5pdEdsb2JhbEFuaW1hdGlvbnMoICdzZWN0aW9uX2J1eSAnLCBzZWxmVHJpZ2dlcmVkRWxlbXMgKTtcblxuXG5cdH0pO1xuXG5cbn0pO1xuIiwiXG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi9JbWFnZUxvYWQnO1xuaW1wb3J0IGluaXRhbmltYXRpb24gZnJvbSAnLi9pbml0LWFuaW1hdGlvbic7XG5cblxuLy8gcGl4aSBhbmltYXRpb25zXG52YXIgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1sb2FkbWUnKTtcblxudmFyIG9wdGlvbnMgPSB7XG5cdHJvb3RNYXJnaW46ICcwcHgnLFxuXHR0aHJlc2hvbGQ6IFswLDFdXG59O1xuXG52YXIgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaXRlbXMgPT4ge1xuXHQvLyBjb25zb2xlLmxvZyhpdGVtcyk7XG5cdGl0ZW1zLmZvckVhY2goZWwgPT4ge1xuXG5cdFx0aWYoZWwuaXNJbnRlcnNlY3RpbmcgJiYgZWwuaW50ZXJzZWN0aW9uUmF0aW8+MCkge1xuXHRcdFx0aWYoISQoZWwudGFyZ2V0KS5oYXNDbGFzcygnaXMtaW5pdCcpKSB7XG5cdFx0XHRcdCQoZWwudGFyZ2V0KS5hZGRDbGFzcygnaXMtaW5pdCcpO1xuXHRcdFx0XHRuZXcgSW1hZ2VMb2FkZXIoJChlbC50YXJnZXQpKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2ludGVyc2VjdGVkJyxlbC50YXJnZXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59LCBvcHRpb25zKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG5cdG9ic2VydmVyLm9ic2VydmUodGFyZ2V0c1tpXSk7XG59XG5cbiQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcblx0XHRvYnNlcnZlci5vYnNlcnZlKHRhcmdldHNbaV0pO1xuXHR9XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==