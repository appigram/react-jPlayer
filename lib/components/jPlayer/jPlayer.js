"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _keyControlContainer = _interopRequireDefault(require("./keyControl/keyControlContainer"));

var _screenFullContainer = _interopRequireDefault(require("./screenFull/screenFullContainer"));

var _errorLoggerContainer = _interopRequireDefault(require("./errorLogger/errorLoggerContainer"));

var _timeDisplayContainer = _interopRequireDefault(require("./timeDisplay/timeDisplayContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/forbid-prop-types */
var JPlayer = function JPlayer(props) {
  var className = props.className,
      keyBindings = props.keyBindings,
      children = props.children,
      onMouseMoveCapture = props.onMouseMoveCapture,
      id = props.id;
  return _react["default"].createElement("div", {
    id: id,
    className: className,
    draggable: false,
    onMouseMoveCapture: onMouseMoveCapture
  }, _react["default"].createElement(_keyControlContainer["default"], {
    keyBindings: keyBindings
  }), _react["default"].createElement(_timeDisplayContainer["default"], null), _react["default"].createElement(_screenFullContainer["default"], null), _react["default"].createElement(_errorLoggerContainer["default"], null), children);
};

JPlayer.defaultProps = {
  keyBindings: null
};
JPlayer.propTypes = {
  keyBindings: _propTypes["default"].object,
  onMouseMoveCapture: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].element]).isRequired
};
var _default = JPlayer;
exports["default"] = _default;