/*!
 * react-mic v3.1.0 - https://hackingbeauty.github.io/react-mic
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-mic"] = factory(require("react"));
	else
		root["react-mic"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

var AudioContext = {
  getAudioContext: function getAudioContext() {
    return audioCtx;
  },
  getAnalyser: function getAnalyser() {
    return analyser;
  }
};

/* harmony default export */ __webpack_exports__["a"] = AudioContext;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ReactMic__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReactMic", function() { return __WEBPACK_IMPORTED_MODULE_0__components_ReactMic__["a"]; });




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_MicrophoneRecorder__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_AudioContext__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactMic; });
var _jsxFileName = '/Users/markmuskardin/code/javascript/react-mic/src/components/ReactMic.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// cool blog article on how to do this: http://www.smartjava.org/content/exploring-html5-web-audio-visualizing-sound
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

// distortion curve for the waveshaper, thanks to Kevin Ennis
// http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion





var WIDTH = "640";
var HEIGHT = "100";

var ReactMic = function (_Component) {
  _inherits(ReactMic, _Component);

  function ReactMic(props) {
    _classCallCheck(this, ReactMic);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.visualize = function (analyser, visualizerCanvas, visualizerCanvasCtx) {
      var self = _this;
      var _this$props = _this.props,
          backgroundColor = _this$props.backgroundColor,
          strokeColor = _this$props.strokeColor;


      var bufferLength = analyser.fftSize;

      var dataArray = new Uint8Array(bufferLength);

      visualizerCanvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      function draw() {

        var drawVisual = requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        visualizerCanvasCtx.fillStyle = backgroundColor;
        visualizerCanvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        visualizerCanvasCtx.lineWidth = 3;
        visualizerCanvasCtx.strokeStyle = strokeColor;

        visualizerCanvasCtx.beginPath();

        var sliceWidth = WIDTH * 1.0 / bufferLength;
        var x = 0;

        for (var i = 0; i < bufferLength; i++) {
          var v = dataArray[i] / 128.0;
          var y = v * HEIGHT / 2;

          if (i === 0) {
            visualizerCanvasCtx.moveTo(x, y);
          } else {
            visualizerCanvasCtx.lineTo(x, y);
          }

          x += sliceWidth;
        }

        visualizerCanvasCtx.lineTo(visualizerCanvas.width, visualizerCanvas.height / 2);
        visualizerCanvasCtx.stroke();
      };

      draw();
    };

    _this.state = {
      audioCtx: null,
      analyser: null,
      microphoneRecorder: null,
      visualizerCanvas: null,
      visualizerCanvasCtx: null
    };
    return _this;
  }

  ReactMic.prototype.componentDidMount = function componentDidMount() {
    var self = this;
    var onStop = this.props.onStop;

    var analyser = __WEBPACK_IMPORTED_MODULE_2__libs_AudioContext__["a" /* default */].getAnalyser();
    var visualizerCanvas = this.refs.visualizer;
    var visualizerCanvasCtx = this.refs.visualizer.getContext("2d");

    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.85;
    analyser.fftSize = 2048;

    this.setState({
      analyser: analyser,
      microphoneRecorder: new __WEBPACK_IMPORTED_MODULE_1__libs_MicrophoneRecorder__["a" /* MicrophoneRecorder */](onStop),
      visualizerCanvas: visualizerCanvas,
      visualizerCanvasCtx: visualizerCanvasCtx
    });

    this.visualize(analyser, visualizerCanvas, visualizerCanvasCtx);
  };

  ReactMic.prototype.render = function render() {
    var _props = this.props,
        record = _props.record,
        onStop = _props.onStop;
    var _state = this.state,
        analyser = _state.analyser,
        audioCtx = _state.audioCtx,
        microphoneRecorder = _state.microphoneRecorder;


    if (record) {
      if (microphoneRecorder) {
        microphoneRecorder.startRecording();
      }
    } else {
      if (microphoneRecorder) {
        microphoneRecorder.stopRecording(onStop);
      }
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('canvas', { ref: 'visualizer', className: this.props.className, __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    });
  };

  return ReactMic;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);




ReactMic.propTypes = {
  backgroundColor: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  strokeColor: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  className: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  height: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  record: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool.isRequired,
  onStop: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

ReactMic.defaultProps = {
  backgroundColor: '#4bb8d1',
  strokeColor: '#000000',
  className: 'visualizer',
  record: false
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AudioContext__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicrophoneRecorder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var analyser = void 0;
var audioCtx = void 0;
var mediaRecorder = void 0;
var chunks = [];
var startTime = void 0;
var stream = void 0;
var blobObject = void 0;
var onStopCallback = void 0;

var constraints = { audio: true, video: false }; // constraints - only audio needed

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var MicrophoneRecorder = function () {
  function MicrophoneRecorder(callback) {
    var _this = this;

    _classCallCheck(this, MicrophoneRecorder);

    this.startRecording = function () {
      var self = _this;

      audioCtx = __WEBPACK_IMPORTED_MODULE_0__AudioContext__["a" /* default */].getAudioContext();
      analyser = __WEBPACK_IMPORTED_MODULE_0__AudioContext__["a" /* default */].getAnalyser();

      startTime = Date.now();

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (mediaRecorder && mediaRecorder.state === 'paused') {
        mediaRecorder.resume();
        return;
      }

      if (mediaRecorder && mediaRecorder.state === 'inactive') {
        mediaRecorder.start(10);
        var source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);
      }
    };

    var self = this;

    if (navigator.mediaDevices) {
      console.log('getUserMedia supported.');

      navigator.mediaDevices.getUserMedia(constraints).then(function (str) {
        stream = str;
        mediaRecorder = new MediaRecorder(str);
        mediaRecorder.onstop = _this.onStop;
        onStopCallback = callback;
        mediaRecorder.ondataavailable = function (event) {
          chunks.push(event.data);
        };
      });
    } else {
      alert('Unfortunately, your browser sucks.  Apple refuses to support the latest Web features in Safari.  Please tell them to upgrade the Safari Web browser.');
    }
    return this;
  }

  MicrophoneRecorder.prototype.stopRecording = function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      audioCtx.suspend();
    }
  };

  MicrophoneRecorder.prototype.onStop = function onStop(evt) {
    var blob = new Blob(chunks, { 'type': 'audio/webm' });
    chunks = [];
    //blob
    var blobObject = {
      blob: blob,
      startTime: startTime,
      stopTime: Date.now(),
      blobURL: window.URL.createObjectURL(blob)
    };

    onStopCallback(blobObject);
  };

  return MicrophoneRecorder;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});