'use strict';

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