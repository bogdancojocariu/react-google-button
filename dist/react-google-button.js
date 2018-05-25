/*! react-google-button.js v0.5.3 | (c) prescottprue */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactGoogleButton"] = factory(require("react"), require("prop-types"));
	else
		root["ReactGoogleButton"] = factory(root["React"], root["PropTypes"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var baseStyle = {
  height: '40px',
  width: '234px',
  border: 'none',
  textAlign: 'center',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
  fontSize: '13px',
  lineHeight: '40px',
  display: 'block',
  borderRadius: '2px',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s',
  fontFamily: 'Barlow,sans-serif',
  cursor: 'pointer'
};

var darkStyle = exports.darkStyle = _extends({
  backgroundColor: '#4285f4',
  color: '#fff'
}, baseStyle);

var lightStyle = exports.lightStyle = _extends({
  backgroundColor: '#fff',
  color: 'rgba(0,0,0,.54)'
}, baseStyle);

var iconStyle = exports.iconStyle = {
  width: '38px',
  height: '38px',
  textAlign: 'center',
  verticalAlign: 'center',
  display: 'block',
  marginTop: '1px',
  marginLeft: '1px',
  float: 'left',
  backgroundColor: '#fff',
  borderRadius: '1px',
  whiteSpace: 'nowrap'
};

var svgStyle = exports.svgStyle = {
  width: '38px',
  height: '38px',
  display: 'block'
};

var hoverStyle = exports.hoverStyle = {
  boxShadow: '0 0 3px 3px rgba(66,133,244,.3)',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s'

  // export const pressedStyle = {
  //   backgroundColor: '#3367D6'
  // }

};var disabledStyle = exports.disabledStyle = {
  backgroundColor: 'rgba(37, 5, 5, .08)',
  color: 'rgba(0, 0, 0, .40)',
  cursor: 'not-allowed'
};

var disabledIconStyle = exports.disabledIconStyle = {
  backgroundColor: 'transparent'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoogleButton = undefined;

var _GoogleButton2 = __webpack_require__(4);

var _GoogleButton3 = _interopRequireDefault(_GoogleButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GoogleButton = _GoogleButton3.default;
exports.default = _GoogleButton3.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icons = __webpack_require__(5);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleButton = function (_PureComponent) {
  _inherits(GoogleButton, _PureComponent);

  function GoogleButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoogleButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoogleButton.__proto__ || Object.getPrototypeOf(GoogleButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.getStyle = function (propStyles) {
      var baseStyle = _this.props.type === 'dark' ? _styles.darkStyle : _styles.lightStyle;
      if (_this.state.hovered) {
        return _extends({}, baseStyle, _styles.hoverStyle, propStyles);
      }
      if (_this.props.disabled) {
        return _extends({}, baseStyle, _styles.disabledStyle, propStyles);
      }
      return _extends({}, baseStyle, propStyles);
    }, _this.mouseOver = function () {
      if (!_this.props.disabled) {
        _this.setState({ hovered: true });
      }
    }, _this.mouseOut = function () {
      if (!_this.props.disabled) {
        _this.setState({ hovered: false });
      }
    }, _this.click = function (e) {
      if (!_this.props.disabled) {
        _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoogleButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          style = _props.style,
          otherProps = _objectWithoutProperties(_props, ['label', 'style']);

      return _react2.default.createElement(
        'div',
        _extends({}, otherProps, {
          onClick: this.click,
          style: this.getStyle(style),
          onMouseOver: this.mouseOver,
          onMouseOut: this.mouseOut
        }),
        _react2.default.createElement(_icons.GoogleIcon, this.props),
        _react2.default.createElement(
          'span',
          null,
          label
        )
      );
    }
  }]);

  return GoogleButton;
}(_react.PureComponent);

GoogleButton.propTypes = {
  label: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['light', 'dark']),
  style: _propTypes2.default.object
};
GoogleButton.defaultProps = {
  label: 'Sign in with Google',
  disabled: false,
  type: 'dark',
  onClick: function onClick() {}
};
exports.default = GoogleButton;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var darkSvg = _react2.default.createElement(
  'svg',
  {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '46px',
    height: '46px',
    viewBox: '0 0 46 46',
    style: _styles.svgStyle
  },
  _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement(
      'filter',
      {
        x: '-50%',
        y: '-50%',
        width: '200%',
        height: '200%',
        filterUnits: 'objectBoundingBox',
        id: 'filter-1'
      },
      _react2.default.createElement('feOffset', { dx: '0', dy: '1', 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
      _react2.default.createElement('feGaussianBlur', {
        stdDeviation: '0.5',
        'in': 'shadowOffsetOuter1',
        result: 'shadowBlurOuter1'
      }),
      _react2.default.createElement('feColorMatrix', {
        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0',
        'in': 'shadowBlurOuter1',
        type: 'matrix',
        result: 'shadowMatrixOuter1'
      }),
      _react2.default.createElement('feOffset', { dx: '0', dy: '0', 'in': 'SourceAlpha', result: 'shadowOffsetOuter2' }),
      _react2.default.createElement('feGaussianBlur', {
        stdDeviation: '0.5',
        'in': 'shadowOffsetOuter2',
        result: 'shadowBlurOuter2'
      }),
      _react2.default.createElement('feColorMatrix', {
        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0',
        'in': 'shadowBlurOuter2',
        type: 'matrix',
        result: 'shadowMatrixOuter2'
      }),
      _react2.default.createElement(
        'feMerge',
        null,
        _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter1' }),
        _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter2' }),
        _react2.default.createElement('feMergeNode', { 'in': 'SourceGraphic' })
      )
    ),
    _react2.default.createElement('rect', { id: 'path-2', x: '0', y: '0', width: '40', height: '40', rx: '2' }),
    _react2.default.createElement('rect', { id: 'path-3', x: '5', y: '5', width: '38', height: '38', rx: '1' })
  ),
  _react2.default.createElement(
    'g',
    {
      id: 'Google-Button',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd'
    },
    _react2.default.createElement('g', { id: '9-PATCH', transform: 'translate(-608.000000, -219.000000)' }),
    _react2.default.createElement(
      'g',
      {
        id: 'btn_google_dark_normal',
        transform: 'translate(-1.000000, -1.000000)'
      },
      _react2.default.createElement(
        'g',
        {
          id: 'button',
          transform: 'translate(4.000000, 4.000000)',
          filter: 'url(#filter-1)'
        },
        _react2.default.createElement(
          'g',
          { id: 'button-bg' },
          _react2.default.createElement('use', { fill: '#4285F4', fillRule: 'evenodd' }),
          _react2.default.createElement('use', { fill: 'none' }),
          _react2.default.createElement('use', { fill: 'none' }),
          _react2.default.createElement('use', { fill: 'none' })
        )
      ),
      _react2.default.createElement(
        'g',
        { id: 'button-bg-copy' },
        _react2.default.createElement('use', { fill: '#FFFFFF', fillRule: 'evenodd' }),
        _react2.default.createElement('use', { fill: 'none' }),
        _react2.default.createElement('use', { fill: 'none' }),
        _react2.default.createElement('use', { fill: 'none' })
      ),
      _react2.default.createElement(
        'g',
        { id: 'logo_googleg_48dp', transform: 'translate(15.000000, 15.000000)' },
        _react2.default.createElement('path', {
          d: 'M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z',
          id: 'Shape',
          fill: '#4285F4'
        }),
        _react2.default.createElement('path', {
          d: 'M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z',
          id: 'Shape',
          fill: '#34A853'
        }),
        _react2.default.createElement('path', {
          d: 'M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z',
          id: 'Shape',
          fill: '#FBBC05'
        }),
        _react2.default.createElement('path', {
          d: 'M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z',
          id: 'Shape',
          fill: '#EA4335'
        }),
        _react2.default.createElement('path', { d: 'M0,0 L18,0 L18,18 L0,18 L0,0 Z', id: 'Shape' })
      ),
      _react2.default.createElement('g', { id: 'handles_square' })
    )
  )
);

var lightSvg = _react2.default.createElement(
  'svg',
  {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '46px',
    height: '46px',
    viewBox: '0 0 46 46',
    style: _styles.svgStyle
  },
  _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement(
      'filter',
      {
        x: '-50%',
        y: '-50%',
        width: '200%',
        height: '200%',
        filterUnits: 'objectBoundingBox',
        id: 'filter-1'
      },
      _react2.default.createElement('feOffset', { dx: '0', dy: '1', 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
      _react2.default.createElement('feGaussianBlur', {
        stdDeviation: '0.5',
        'in': 'shadowOffsetOuter1',
        result: 'shadowBlurOuter1'
      }),
      _react2.default.createElement('feColorMatrix', {
        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0',
        'in': 'shadowBlurOuter1',
        type: 'matrix',
        result: 'shadowMatrixOuter1'
      }),
      _react2.default.createElement('feOffset', { dx: '0', dy: '0', 'in': 'SourceAlpha', result: 'shadowOffsetOuter2' }),
      _react2.default.createElement('feGaussianBlur', {
        stdDeviation: '0.5',
        'in': 'shadowOffsetOuter2',
        result: 'shadowBlurOuter2'
      }),
      _react2.default.createElement('feColorMatrix', {
        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0',
        'in': 'shadowBlurOuter2',
        type: 'matrix',
        result: 'shadowMatrixOuter2'
      }),
      _react2.default.createElement(
        'feMerge',
        null,
        _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter1' }),
        _react2.default.createElement('feMergeNode', { 'in': 'shadowMatrixOuter2' }),
        _react2.default.createElement('feMergeNode', { 'in': 'SourceGraphic' })
      )
    ),
    _react2.default.createElement('rect', { id: 'path-2', x: '0', y: '0', width: '40', height: '40', rx: '2' })
  ),
  _react2.default.createElement(
    'g',
    {
      id: 'Google-Button',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd'
    },
    _react2.default.createElement('g', { id: '9-PATCH', transform: 'translate(-608.000000, -160.000000)' }),
    _react2.default.createElement(
      'g',
      {
        id: 'btn_google_light_normal',
        transform: 'translate(-1.000000, -1.000000)'
      },
      _react2.default.createElement(
        'g',
        {
          id: 'button',
          transform: 'translate(4.000000, 4.000000)',
          filter: 'url(#filter-1)'
        },
        _react2.default.createElement(
          'g',
          { id: 'button-bg' },
          _react2.default.createElement('use', { fill: '#FFFFFF', fillRule: 'evenodd' }),
          _react2.default.createElement('use', { fill: 'none' }),
          _react2.default.createElement('use', { fill: 'none' }),
          _react2.default.createElement('use', { fill: 'none' })
        )
      ),
      _react2.default.createElement(
        'g',
        { id: 'logo_googleg_48dp', transform: 'translate(15.000000, 15.000000)' },
        _react2.default.createElement('path', {
          d: 'M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z',
          id: 'Shape',
          fill: '#4285F4'
        }),
        _react2.default.createElement('path', {
          d: 'M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z',
          id: 'Shape',
          fill: '#34A853'
        }),
        _react2.default.createElement('path', {
          d: 'M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z',
          id: 'Shape',
          fill: '#FBBC05'
        }),
        _react2.default.createElement('path', {
          d: 'M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z',
          id: 'Shape',
          fill: '#EA4335'
        }),
        _react2.default.createElement('path', { d: 'M0,0 L18,0 L18,18 L0,18 L0,0 Z', id: 'Shape' })
      ),
      _react2.default.createElement('g', { id: 'handles_square' })
    )
  )
);

var disabledSvg = _react2.default.createElement(
  'svg',
  {
    width: '46px',
    height: '46px',
    viewBox: '0 0 46 46',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    style: _styles.svgStyle
  },
  _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement('rect', { id: 'path-1', x: '0', y: '0', width: '40', height: '40', rx: '2' })
  ),
  _react2.default.createElement(
    'g',
    {
      id: 'Google-Button',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd'
    },
    _react2.default.createElement('g', { id: '9-PATCH', transform: 'translate(-788.000000, -219.000000)' }),
    _react2.default.createElement(
      'g',
      {
        id: 'btn_google_dark_disabled',
        transform: 'translate(-1.000000, -1.000000)'
      },
      _react2.default.createElement(
        'g',
        { id: 'button', transform: 'translate(4.000000, 4.000000)' },
        _react2.default.createElement(
          'g',
          { id: 'button-bg' },
          _react2.default.createElement('use', { fillOpacity: '0.08', fill: '#000000', fillRule: 'evenodd' }),
          _react2.default.createElement('use', { fill: 'none' }),
          _react2.default.createElement('use', { fill: 'none' }),
          _react2.default.createElement('use', { fill: 'none' })
        )
      ),
      _react2.default.createElement('path', {
        d: 'M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z',
        id: 'Shape-Copy',
        fillOpacity: '0.4',
        fill: '#000000'
      }),
      _react2.default.createElement('g', { id: 'handles_square' })
    )
  )
);

var GoogleIcon = exports.GoogleIcon = function GoogleIcon(_ref) {
  var disabled = _ref.disabled,
      type = _ref.type;
  return _react2.default.createElement(
    'div',
    { style: !disabled ? _styles.iconStyle : _extends({}, _styles.iconStyle, _styles.disabledIconStyle) },
    !disabled ? type === 'dark' ? darkSvg : lightSvg : disabledSvg
  );
};

GoogleIcon.propTypes = {
  disabled: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['light', 'dark'])
};

GoogleIcon.defaultProps = {
  type: 'dark'
};

/***/ })
/******/ ]);
});