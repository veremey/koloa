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

/***/ "./markup/static/js/main.js":
/*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageLoad */ "./markup/static/js/ImageLoad.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9JbWFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIkltYWdlTG9hZCIsIiR3cmFwcGVyIiwid3JhcHBlciIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZGF0YSIsIm1vdXNlT24iLCJhbmltYXRlZCIsImFwcCIsIlBJWEkiLCJBcHBsaWNhdGlvbiIsInRyYW5zcGFyZW50IiwiYXBwZW5kIiwidmlldyIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsInN0YWdlIiwiYWRkQ2hpbGQiLCJsb2FkIiwic3RhcnRBbmltYXRpb24iLCJiaW5kIiwiYWZ0ZXJMb2FkIiwidGhhdCIsInRtcEltZyIsIkltYWdlIiwib25sb2FkIiwiaW1nIiwiYmciLCJTcHJpdGUiLCJmcm9tSW1hZ2UiLCJwb3NpdGlvbiIsIngiLCJ5IiwiZGlzcGxhY2VtZW50U3ByaXRlIiwidGV4dHVyZSIsImJhc2VUZXh0dXJlIiwid3JhcE1vZGUiLCJXUkFQX01PREVTIiwiUkVQRUFUIiwiZGlzcGxhY2VtZW50RmlsdGVyIiwiZmlsdGVycyIsIkRpc3BsYWNlbWVudEZpbHRlciIsImNsaWNrIiwidGwiLCJUaW1lbGluZU1heCIsIm9uQ29tcGxldGUiLCJ0byIsInNjYWxlIiwiaG92ZXIiLCJUd2Vlbk1heCIsInRpY2tlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb1dhdmVzIiwidGFyZ2V0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9wdGlvbnMiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIml0ZW1zIiwiZm9yRWFjaCIsImVsIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIiQiLCJ0YXJnZXQiLCJoYXNDbGFzcyIsImFkZENs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QUFFREwsQ0FBQyxDQUFDUSxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBWTtBQUNsQyxPQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdsQixPQUFPLENBQUNtQixNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUN4Q1osWUFBUSxDQUFDYyxPQUFULENBQWlCcEIsT0FBTyxDQUFDa0IsQ0FBRCxDQUF4QjtBQUNBO0FBQ0QsQ0FKRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qc1wiKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VMb2FkIHtcbiAgY29uc3RydWN0b3IoJHdyYXBwZXIpIHtcblxuICBcdHRoaXMud3JhcHBlciA9ICR3cmFwcGVyO1xuICBcdHRoaXMud2lkdGggPSAkd3JhcHBlci5oZWlnaHQoKSAqIC43MjtcbiAgXHR0aGlzLmhlaWdodCA9ICR3cmFwcGVyLmhlaWdodCgpO1xuICBcdHRoaXMuc3JjID0gJHdyYXBwZXIuZGF0YSgnc3JjJyk7XG4gIFx0dGhpcy5tb3VzZU9uID0gZmFsc2U7XG4gIFx0dGhpcy5hbmltYXRlZCA9IGZhbHNlO1xuXG4gIFx0dGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0LHt0cmFuc3BhcmVudDogdHJ1ZX0pO1xuXG4gIFx0dGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmFwcC52aWV3KTtcblxuICBcdHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gIFx0dGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gIFx0dGhpcy5sb2FkKHRoaXMuc3RhcnRBbmltYXRpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICBsb2FkKGFmdGVyTG9hZCkge1xuICBcdGxldCB0aGF0ID0gdGhpcztcbiAgXHRsZXQgdG1wSW1nID0gbmV3IEltYWdlKCk7XG4gIFx0dG1wSW1nLnNyYyA9IHRoaXMuc3JjO1xuICBcdHRtcEltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgXHRcdGFmdGVyTG9hZCgpO1xuICBcdFx0dGhhdC5pbWcgPSB0bXBJbWc7XG4gIFx0fTtcbiAgfVxuXG4gIHN0YXJ0QW5pbWF0aW9uKCkge1xuICBcdGxldCB0aGF0ID0gdGhpcztcbiAgXHQvLyBjb25zb2xlLmxvZyh0aGlzLmltZyk7XG4gIFx0dGhpcy5iZyA9IFBJWEkuU3ByaXRlLmZyb21JbWFnZSh0aGF0LnNyYyk7XG4gIFx0dGhpcy5iZy53aWR0aCA9IHRoaXMud2lkdGg7XG4gIFx0dGhpcy5iZy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgXHR0aGlzLmJnLnBvc2l0aW9uLnggPSAwO1xuICBcdHRoaXMuYmcucG9zaXRpb24ueSA9IDA7XG4gIFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5iZyk7XG5cbiAgICB0aGlzLmRpc3BsYWNlbWVudFNwcml0ZSA9IFBJWEkuU3ByaXRlLmZyb21JbWFnZSgnc3RhdGljL2ltZy9jb250ZW50L2Rpc3BsYWNlbWVudC5qcGcnKTtcblxuICBcdHRoaXMuZGlzcGxhY2VtZW50U3ByaXRlLnRleHR1cmUuYmFzZVRleHR1cmUud3JhcE1vZGUgPSBQSVhJLldSQVBfTU9ERVMuUkVQRUFUO1xuICBcdHRoaXMuZGlzcGxhY2VtZW50RmlsdGVyID0gbmV3IFBJWEkuZmlsdGVycy5EaXNwbGFjZW1lbnRGaWx0ZXIoXG4gIFx0ICB0aGlzLmRpc3BsYWNlbWVudFNwcml0ZVxuICBcdCk7XG4gIFx0Ly8gdGhpcy5kaXNwbGFjZW1lbnRGaWx0ZXIuc2NhbGUuc2V0KDFlNCArIE1hdGgucmFuZG9tKCkqMTAwMCk7XG4gIFx0Ly8gdGhpcy5kaXNwbGFjZW1lbnRTcHJpdGUuc2NhbGUuc2V0KDAuNCArIDAuNipNYXRoLnJhbmRvbSgpKTtcblxuICBcdHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuZGlzcGxhY2VtZW50U3ByaXRlKTtcblxuICBcdHRoaXMuY29udGFpbmVyLmZpbHRlcnMgPSBbdGhpcy5kaXNwbGFjZW1lbnRGaWx0ZXJdO1xuICBcdHRoaXMuY2xpY2soKTtcbiAgXHRsZXQgdGwgPSBuZXcgVGltZWxpbmVNYXgoe29uQ29tcGxldGU6ZnVuY3Rpb24oKSB7dGhhdC5hbmltYXRlZCA9IHRydWU7fX0pO1xuICBcdFx0dGwudG8odGhhdC5kaXNwbGFjZW1lbnRGaWx0ZXIuc2NhbGUsMSx7eDoxLHk6MX0pO1xuICBcdHRoaXMuaG92ZXIoKTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICBcdC8vIGxldCB0aGF0ID0gdGhpcztcbiAgXHQvLyB0aGlzLndyYXBwZXIub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgXHQvLyBcdGxldCB0bCA9IG5ldyBUaW1lbGluZU1heCh7b25Db21wbGV0ZTpmdW5jdGlvbigpIHt0aGF0LmFuaW1hdGVkID0gdHJ1ZTt9fSk7XG4gIFx0Ly8gXHR0bC50byh0aGF0LmRpc3BsYWNlbWVudEZpbHRlci5zY2FsZSwxLHt4OjEseToxfSk7XG4gIFx0Ly8gfSk7XG4gIH1cbiAgaG92ZXIoKSB7XG4gIFx0bGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgVHdlZW5NYXgudGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLHRoYXQuZG9XYXZlcywgdGhhdCk7XG4gICAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdGwudG8odGhhdC5kaXNwbGFjZW1lbnRGaWx0ZXIuc2NhbGUsMC41LHt4OjQseTo4fSk7XG5cbiAgfVxuXG4gIGRvV2F2ZXMoKSB7XG4gIFx0dGhpcy5kaXNwbGFjZW1lbnRTcHJpdGUueCArPSAxO1xuICB9XG59IiwiXG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi9JbWFnZUxvYWQnO1xuXG4vLyBwaXhpIGFuaW1hdGlvbnNcbnZhciB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWxvYWRtZScpO1xuXG52YXIgb3B0aW9ucyA9IHtcblx0cm9vdE1hcmdpbjogJzBweCcsXG5cdHRocmVzaG9sZDogWzAsMV1cbn07XG5cbnZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihpdGVtcyA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKGl0ZW1zKTtcblx0aXRlbXMuZm9yRWFjaChlbCA9PiB7XG5cblx0XHRpZihlbC5pc0ludGVyc2VjdGluZyAmJiBlbC5pbnRlcnNlY3Rpb25SYXRpbz4wKSB7XG5cdFx0XHRpZighJChlbC50YXJnZXQpLmhhc0NsYXNzKCdpcy1pbml0JykpIHtcblx0XHRcdFx0JChlbC50YXJnZXQpLmFkZENsYXNzKCdpcy1pbml0Jyk7XG5cdFx0XHRcdG5ldyBJbWFnZUxvYWRlcigkKGVsLnRhcmdldCkpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnaW50ZXJzZWN0ZWQnLGVsLnRhcmdldCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn0sIG9wdGlvbnMpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcblx0b2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXRzW2ldKTtcbn1cblxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdG9ic2VydmVyLm9ic2VydmUodGFyZ2V0c1tpXSk7XG5cdH1cbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9